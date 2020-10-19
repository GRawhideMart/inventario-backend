const express = require("express");
const Suppliers = require("../controllers/suppliers.controllers");

const router = express.Router();

router
  .route("/")
  .get(async (req, res, next) => {
    try {
      let results = await Suppliers.getAll();
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  })
  .post(async (req, res, next) => {
    const { name: supplier, piva, cu, address, pec, phone } = req.body;
    try {
      let results = await Suppliers.insertSupplier(
        supplier,
        piva,
        cu,
        address,
        pec,
        phone
      );
      res.json(results);
    } catch (e) {
      console.log(e);
      res.sendStatus(500);
    }
  });

router.route("/:id").get(async (req, res, next) => {
  try {
    let results = await Suppliers.getOne(req.params.id);
    res.json(results);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});

module.exports = router;
