const express = require("express");
const cors = require('cors');
const itemsRouter = require("../routes/items.routes");
const roomsRouter = require("../routes/rooms.routes");
const suppliersRouter = require("../routes/suppliers.routes");

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/items", itemsRouter);
app.use("/api/rooms", roomsRouter);
app.use("/api/suppliers", suppliersRouter);

app.listen(process.env.PORT || "8080", () => {
  console.log(`Server running at port ${process.env.PORT || "8080"}`);
});
