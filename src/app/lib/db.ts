import { db, VercelPoolClient } from '@vercel/postgres'

let client: VercelPoolClient | null

export const getDbClient = async () => {
  if (!client) {
    client = await db.connect()
  }
  return client
}
