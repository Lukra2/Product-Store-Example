const pg = require('pg')
const env = require('dotenv')
env.config()

async function ConnectDB(){
    const pool = new pg.Pool({
        connectionString: process.env.CONNECTION_DB_STRING
    })
    const client = await pool.connect();
    console.log("Criou pool de conexões no PostgreSQL!");
 
    const res = await client.query('SELECT NOW()');
    console.log(res.rows[0]);
    client.release();
 
    //guardando para usar sempre o mesmo
    global.connection = pool;
    return pool.connect();
}

module.exports.ConnectDB = ConnectDB