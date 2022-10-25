require("dotenv").config();

const express = require('express');
const app = express();
const PORT = 3000;

//  Enable CORS on Server
let cors = require("cors");
app.use(cors());

// Read body post
app.use(
  express.urlencoded({
      extended: true,
  }),
);
app.use(express.json());

//database
const db = require("./database/config");
db();

//router
const route = require("./routes/index");
route(app);

app.listen(PORT, () => {
  console.log('App running under port: ', PORT);
})