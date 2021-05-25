const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "emilian77",
    host: "localhost",
    port: 5433,
    database: "Groupomania"
});

module.exports = pool;