const express = require("express");
const app = express();
const path = require("path");
const server = require("http").Server(app);
const cors = require("cors")();
const bodyParser = require("body-parser");
require("dotenv").config();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(cors);

app.get("/hello", (req, res) => {
  res.send("ආයුබෝවන්");
});

server.listen(port, () => console.log(`Running on localhost:${port}`));
