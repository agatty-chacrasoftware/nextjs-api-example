import { NextApiRequest, NextApiResponse } from 'next'
import { fetchToken, refreshToken } from './token'
import axios from 'axios'

const axiosApiInstance = axios.create()

const getLead = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    axiosApiInstance.interceptors.request.use(
      async (config) => {
        const token = await fetchToken()

        config.headers = {
          Authorization: `Zoho-oauthtoken ${token}`,
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

    const result = await axiosApiInstance.get(
      `https://www.zohoapis.com/crm/v2/Leads/${req.query.leadId}`
    )
    res.send(result.data)
  } else {
    res
      .status(400)
      .send({ statusCode: 'INVALID_METHOD', message: 'Use appropriate method' })
  }
}

export default getLead
