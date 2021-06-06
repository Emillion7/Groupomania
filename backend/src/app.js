const express = require("express");
const cors = require("cors");
const { apiV1Router } = require("./api");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/v1", apiV1Router);

module.exports = { app };
