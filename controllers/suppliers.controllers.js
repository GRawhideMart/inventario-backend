const connection = require("../db");

let Suppliers = {};

Suppliers.getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Suppliers", (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

Suppliers.getOne = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Suppliers WHERE id=?", [id], (err, results) => {
      if (err) return reject(err);
      return resolve(results[0]);
    });
  });
};

Suppliers.insertSupplier = (
  supplier, piva, cu, address, pec, phone
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO Suppliers(name,piva,cu,address,pec,phone) VALUES (?,?,?,?,?,?);",
      [supplier, piva, cu, address, pec, phone],
      (err, results) => {
        if (err) return reject(err);
        return resolve(results[0]);
      }
    );
  });
};

module.exports = Suppliers;
