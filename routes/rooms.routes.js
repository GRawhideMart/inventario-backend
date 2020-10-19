const express = require("express");
const Rooms = require('../controllers/rooms.controllers');

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      let results = await Rooms.getAll();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res, next) => {
    const {
      name: room,
    } = req.body;
    try {
      let results = await Rooms.insertRoom(
        room
      );
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

router.route("/:id").get(async (req, res, next) => {
  try {
    let results = await Rooms.getOne(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
