//require('dotenv').config();

const { Pool } = require('pg');

const pool = new Pool({
    connectionString: 'postgres://mbyyezvvazmswu:8c382762473bf275cf700f65e7029964cc97aaf0e2ac226dd7ce8b28e5674cad@ec2-34-233-115-14.compute-1.amazonaws.com:5432/d81vm0r55ce2vu',
    max: 20,
    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;