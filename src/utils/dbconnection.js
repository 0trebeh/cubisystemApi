//require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "docor",
    password: "hakunamatata",
    port: 5432,
    /*connectionString: process.env.DBURI,
    max: 20,
    ssl: {
        rejectUnauthorized: false
    }*/
})

module.exports = pool;