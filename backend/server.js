const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();



app.use(cors());

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

db.sequelize.sync({force: true}).then(() => {
  console.log('Drop and Resync Db');
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "admin"
  });
}

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Groupomania application." });
});

require('./routes/auth')(app);
require('./routes/user')(app);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});