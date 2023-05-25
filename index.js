const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 7001;
const apiData = require("./projectData.json");

app.use(cors()); // Enable CORS for all routes

app.get("/", (req, res) => {
  res.send("Hello node is live....");
});

app.get("/projectdata", (req, res) => {
  res.send(apiData);
});

const server = app.listen(port, "0.0.0.0", () => {
  console.log("Server is up and running... @", port);
});

// Increase the timeout value
server.timeout = 120000; // Set the timeout to 2 minutes (120000 milliseconds)
