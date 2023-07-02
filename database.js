var conn = require('mysql2-promise')();
const config = require('./config');
 
conn.configure({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

const getConnection = () => {
    return conn;
}

module.exports = {
    getConnection
}