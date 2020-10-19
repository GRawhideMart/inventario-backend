const connection = require("../db");

let Items = {};

Items.getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Items", (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

Items.getOne = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Items WHERE id=?", [id], (err, results) => {
      if (err) return reject(err);
      return resolve(results[0]);
    });
  });
};

Items.insertItem = (
  room,
  supplier,
  name,
  invoiceNumber,
  purchaseDate,
  inUse
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO Items(room_id,supplier_id,name,invoice_number,purchase_date,in_use) VALUES (?,?,?,?,?,?);",
      [room, supplier, name, invoiceNumber, purchaseDate, inUse],
      (err, results) => {
        if (err) return reject(err);
        return resolve(results[0]);
      }
    );
  });
};

module.exports = Items;
