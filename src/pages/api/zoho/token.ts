import { open } from 'sqlite'
import sqlite3 from 'sqlite3'

export async function openDB() {
  return open({
    filename: './mydb.sqlite',
    driver: sqlite3.Database,
  })
}

export const fetchToken = async () => {
  const db = await openDB()
  const token = await db.all('SELECT * FROM zohoAuth')
  return token[0].accessToken
}

export const refreshToken = async () => {
  const db = await openDB()
  const response = await fetch(
    `https://accounts.zoho.com/oauth/v2/token?refresh_token=${process.env.REFRESH_TOKEN}&client_id=${process.env.CLIENT_ID}&client_secret=${process.env.CLIENT_SECRET}&grant_type=refresh_token`,

    {
      body: '',
      headers: {},
      method: 'POST',
    }
  )

  const token = await response.json()

  const statement = await db.prepare(
    'UPDATE zohoAuth SET accessToken = ? WHERE id = 1'
  )

  await statement.run(token.access_token)

  return token.access_token
}
