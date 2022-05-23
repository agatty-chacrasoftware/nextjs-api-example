import { NextApiRequest, NextApiResponse } from 'next'
import { fetchToken, refreshToken } from './token'
import axios from 'axios'

const axiosApiInstance = axios.create()

const uploadLead = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    console.log(req.body.lead)
    const request = {
      data: [
        {
          Company: req.body.lead.company,
          Last_Name: req.body.lead.lastName,
          First_Name: req.body.lead.firstName,
          Email: req.body.lead.email,
          Phone: req.body.lead.phone,
          Lead_Source: 'Website Form',
          Description: 'Test Project',
        },
      ],
    }

    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const token = await fetchToken()

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

          axios.defaults.headers.common['Authorization'] =
            'Zoho-oauthtoken ' + accessToken

          return axiosApiInstance(originalRequest)
        }

        return Promise.reject(error)
      }
    )

    const result = await axiosApiInstance.post(
      'https://www.zohoapis.com/crm/v2/Leads',
      request
    )
    res.send(result.data)
  } else {
    res.status(400).json({ code: 'INVALID_METHOD' })
  }
}

export default uploadLead
