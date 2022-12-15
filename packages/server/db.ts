import { Client } from 'pg'

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_PORT, POSTGRES_1_PORT_5432_TCP_ADDR } =
  process.env

export const createClientAndConnect = async (): Promise<Client | null> => {
  try {
    const client = new Client({
      user: POSTGRES_USER || 'postgres',
      host:  POSTGRES_1_PORT_5432_TCP_ADDR || 'localhost',
      database: POSTGRES_DB || 'postgres',
      password: POSTGRES_PASSWORD || 'postgres',
      port: Number(POSTGRES_PORT) || 5432
    })

    await client.connect()

    const res = await client.query('SELECT NOW()')
    console.log('  ➜ 🎸 Connected to the database at:', res?.rows?.[0].now)
    client.end()

    return client
  } catch (e) {
    console.error(e)
  }

  return null
}
