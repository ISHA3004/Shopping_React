const mysql = require('mysql')

const conn = mysql.createConnection({
    'hostname':'localhost',
    'user':'root',
    'password':'',
    'database':'shopping'
  })

module.exports = conn;