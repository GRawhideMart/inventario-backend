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

//Items.insertItem = (
//  room,
//  supplier,
//  name,
//  invoiceNumber,
//  purchaseDate,
//  inUse
//) => {
//  return new Promise((resolve, reject) => {
//    connection.query(
//      "INSERT INTO Items(room_id,supplier_id,name,invoice_number,purchase_date,in_use) VALUES (?,?,?,?,?,?);",
//      [room, supplier, name, invoiceNumber, purchaseDate, inUse],
//      (err, results) => {
//        if (err) return reject(err);
//        return resolve(results[0]);
//      }
//    );
//  });
//};

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
      "INSERT INTO Items(room_id,supplier_id,name,invoice_number,purchase_date,in_use) VALUES (:room,:supplier,:name, :invoiceNumber, :purchaseDate, :inUse);",
      { room, supplier, name, invoiceNumber, purchaseDate, inUse },
      (err, results) => {
        if (err) return reject(err);
        return resolve(results[0]);
      }
    );
  });
};

Items.edit = (room, supplier, name, invoiceNumber, purchaseDate, inUse) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "UPDATE Items SET room_id = :room, supplier_id = :supplier, name = :name, invoice_number = :invoiceNumber, purchase_date = :purchaseDate, in_use = :inUse;",
      { room, supplier, name, invoiceNumber, purchaseDate, inUse },
      (err, results) => {
        if (err) return reject(err);
        return resolve(results[0]);
      }
    );
  });
};

//function preparedOptionalUpdate(conn, table, config, data, cb) {
//  let tmp = config
//    .map((item) =>
//      data[item.req] !== undefined ? { sql: item, data: data[item.req] } : null
//    )
//    .filter((item) => item !== null);
//
//  let payload = tmp.reduce(
//    (acc, item) => ({ ...acc, [item.sql.query]: item.data }),
//    {}
//  );
//  let query = tmp
//    .map((item) => `${item.sql.query} = :${item.sql.query}`)
//    .join(", ");
//
//  conn.query(`UPDATE ${table} SET ${query}`, payload, cb);
//}

module.exports = Items;
