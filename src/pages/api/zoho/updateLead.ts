import { NextApiRequest, NextApiResponse } from 'next'
import { fetchToken, refreshToken } from './token'
import axios from 'axios'

const axiosApiInstance = axios.create()

const updateLead = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PUT') {
    const request = {
      data: [
        {
          Company: req.body.company,
          Last_Name: req.body.lastName,
          First_Name: req.body.firstName,
          Email: req.body.email,
          Phone: req.body.phone,
          Lead_Source: 'Website Form',
          Description: 'Test Project',
        },
      ],
    }

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const token = await fetchToken()
        console.log(token)

        config.headers = {
          Authorization: `Zoho-oauthtoken ${token}`,
          'Content-Type': 'application/json',
        }

        return config
      },
      (error) => {
        Promise.reject(error)
      }
    )

    axiosApiInstance.interceptors.response.use(
      (response) => {
        return response
      },
      async function (error) {
        const originalRequest = error.config
        console.log(error.response.status)

        if (error.response.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true

          const accessToken = await refreshToken()
          console.log('Refresh Token', accessToken)

          axios.defaults.headers.common['Authorization'] =
            'Zoho-oauthtoken ' + accessToken

          return axiosApiInstance(originalRequest)
        }

        return Promise.reject(error)
      }
    )

    const result = await axiosApiInstance.put(
      `https://www.zohoapis.com/crm/v2/Leads/${req.body.id}`,
      request
    )
    res.send(result.data)
  } else {
    res.status(400).json({ code: 'INVALID_METHOD' })
  }
}

export default updateLead
