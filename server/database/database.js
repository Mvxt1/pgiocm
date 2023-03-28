const mysql = require('mysql');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'pgiocm',
    password: ''
});

module.exports = pool;