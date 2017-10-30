const { Pool, Client } = require('pg')
const { stringConection } = require('./config')

query = (sqlQuery, ok, error) => {
  const client = new Client(stringConection)
  client.connect()
  client.query(sqlQuery.text, sqlQuery.parameters, (err, res) => {
    client.end()
    if (err) {
      error(err)
    }else{
      ok(res.rows)
    }
  })
}

//const { Pool } = require('client')
transaction = (sqlTransaction, ok, error) => {
  const pool = new Pool(stringConection)

  pool.connect((err, client, done) => {
    const shouldAbort = (err) => {
      if (err) {
        console.error('Error  al realizar transacción', err.stack)
        client.query('ROLLBACK', (err) => {
          done()
          if (err) {
            console.error('Error al realizar rollback de la transacción: ', err.stack)
            error(err)
          }
        })
      }
      return !!err
    }

    client.query('BEGIN', (err) => {
      if (shouldAbort(err)) return
      client.query(sqlTransaction.text, sqlTransaction.parameters, (err, res) => {
        if (shouldAbort(err)) return

        client.query('COMMIT', (err) => {
          done()
          if (err) {
            console.error('Error al realizar el commit de la transacción: ', err.stack)
            error(err)
          }

          console.log("Transacción realizada con éxito")
          ok("Transacción realizada con éxito")
        })
      })
    })
  })
}

exports.query = query
exports.transaction = transaction
