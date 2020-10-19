const connection = require("../db");

let Rooms = {};

Rooms.getAll = () => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM Rooms", (err, results) => {
      if (err) return reject(err);
      return resolve(results);
    });
  });
};

Rooms.getOne = (id) => {
  return new Promise((resolve, reject) => {
    connection.query("SELECT * FROM ROOMS WHERE id=?", [id], (err, results) => {
      if (err) return reject(err);
      return resolve(results[0]);
    });
  });
};

Rooms.insertRoom = (
  room
) => {
  return new Promise((resolve, reject) => {
    connection.query(
      "INSERT INTO Rooms(name) VALUES (?);",
      [room],
      (err, results) => {
        if (err) return reject(err);
        return resolve(results[0]);
      }
    );
  });
};

module.exports = Rooms;
