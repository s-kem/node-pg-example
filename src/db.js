const { Pool, Client } = require('pg')

const dbConfig = {
  user: 'sean',
  host: 'localhost',
  database: 'test',
  password: '',
  port: 5432,
}

const pool = new Pool(dbConfig)

const saveData = async data => {
  const query = {
    text: 'INSERT INTO test(test_column) VALUES($1)',
    values: [ data.hello ],
  }

  const client = await pool.connect()

  try {
    await client.query(query)
  } catch (error) {
    console.error("Database Save Error: ", error)
  } finally {
    client.release()
  }
}

module.exports = { saveData }
