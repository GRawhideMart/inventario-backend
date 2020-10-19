const express = require("express");
const itemsRouter = require('../routes/items.routes');
const roomsRouter = require('../routes/rooms.routes');

const app = express();

app.use(express.json());

app.use('/api/items', itemsRouter);
app.use('/api/rooms', roomsRouter);

app.listen(process.env.PORT || '8080', () => {
  console.log(`Server running at port ${process.env.PORT || '8080'}`);
});
