const mysql = require("mysql2");

const connection = mysql.createPool({
  connectionLimit: 10,
  password: "$Akg240!!",
  user: "root",
  database: "inventary",
  host: "localhost",
  port: "3306",
  namedPlaceholders: true,
});

module.exports = connection;
