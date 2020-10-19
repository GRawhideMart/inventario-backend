const express = require("express");
const db = require("../db");
const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      let results = await db.all();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res, next) => {
    const {
      room_id: room,
      supplier_id: supplier,
      name,
      invoice_number: invoiceNumber,
      purchase_date: purchaseDate,
      in_use: inUse,
    } = req.body;
    try {
      let results = await db.insertItem(
        room,
        supplier,
        name,
        invoiceNumber,
        purchaseDate,
        inUse
      );
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

router.route("/:id").get(async (req, res, next) => {
  try {
    let results = await db.one(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
