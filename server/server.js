const express = require("express");
const routes = require('../routes');

const app = express();

app.use(express.json());

app.use('/api/items', routes);

app.listen(process.env.PORT || 8080, () => {
  console.log(`Server running at port ${process.env.PORT || 8080}`);
});
