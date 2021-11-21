"use strict";
const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const dotEnv = require("dotenv").config();

const emailRoutes = require("./routes/emailRoutes");

const PORT = process.env.PORT || 4000;
const APP_FOLDER = path.resolve(__dirname, "./views");

const app = express();
app.use(compression());
app.use(express.json());

app.use(cors());
app.options("*", cors());
// ---- APPLICATION API ---- //
app.use("/api/email", emailRoutes);

// ---- SERVE STATIC FILES ---- //
app.use("/", express.static(APP_FOLDER, { maxAge: "1y" }));

// ---- SERVE APPLICATION PATHS ---- //
app.all("*", function (req, res) {
  res.status(200).sendFile(`/`, { root: APP_FOLDER });
});

// ---- START UP THE NODE SERVER  ----
app.listen(PORT, function () {
  console.log(
    "Node Express server for " +
      app.name +
      " listening on http://localhost:" +
      PORT
  );
});
