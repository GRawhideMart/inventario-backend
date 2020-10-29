const express = require("express");
const Rooms = require("../controllers/rooms.controllers");

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
    const { name: room } = req.body;
    try {
      let results = await Rooms.insertRoom(room);
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .put((req, res, next) => {
    res.sendStatus(500);
    res.json("Operation not supported on this endpoint");
  })
  .delete(async (req, res, next) => {
    const consent = confirm(
      "AVVERTIMENTO: questo cancellerà TUTTI gli oggetti nel tuo database.\nProcedi solo se sei sicuro."
    );
    if (!consent) alert("Scelta saggia.");
    if (consent) {
      try {
        let results = await Rooms.deleteAll();
        res.json(results);
      } catch (e) {
        console.log(e);
        res.sendStatus(500);
      }
    }
  });

router
  .route("/:id")
  .get(async (req, res, next) => {
    try {
      let results = await Rooms.getOne(req.params.id);
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .put(async (req, res, next) => {
    const { name } = req.body;
    try {
      let results = await Rooms.edit(name);
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .delete(async (req, res, next) => {
    try {
      let results = await Rooms.deleteOne(req.params.id);
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

module.exports = router;
