/**
 *  server.js
 *  Copy from project "WingMan Ver3"
 */

const express = require("express");
const db = require("./server/models/db");
const app = express();
const port = 3000;
const seed = require("./server/models/seed/seed-db");

// Setup the Express middleware
require("./server/middleware/middleware")(app);

// Setup the api
require("./server/api")(app);

// Connect to Db then start the server
db.sequelize
  .sync({
    logging: console.log,
    force: true, // Set to true for Db updates
  })
  /* No seed data  */
  .then(() => {
    seed.insert();
  })
  .then(() => {
    app.listen(port, () => {
      console.log("running server on port " + port);
    });
  });

// Start the server - Debug code
/*
app.listen(port, () => {
  console.log(`running server on port ${port} `);
});
*/
