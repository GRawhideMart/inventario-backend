const mysql = require("mysql2");

const conn = mysql.createPool({
  connectionLimit: 10,
  password: "$Akg240!!",
  user: "root",
  database: "inventary",
  host: "localhost",
  port: "3306",
});

let db = {};

db.all = () => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Items", (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

db.one = (id) => {
  return new Promise((resolve, reject) => {
    conn.query("SELECT * FROM Items WHERE id=?", [id], (err, results) => {
      if (err) return reject(err);
      return resolve(results[0]);
    });
  });
};

db.insertItem = (room,supplier,name,invoiceNumber,purchaseDate,inUse) => {
    return new Promise((resolve, reject) => {
      conn.query("INSERT INTO Items(room_id,supplier_id,name,invoice_number,purchase_date,in_use) VALUES (?,?,?,?,?,?);", [room,supplier,name,invoiceNumber,purchaseDate,inUse], (err, results) => {
        if (err) return reject(err);
        return resolve(results[0]);
      });
    });
  };

module.exports = db;
