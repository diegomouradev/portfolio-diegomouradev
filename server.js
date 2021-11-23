"use strict";
const express = require("express");
const compression = require("compression");
const path = require("path");
const cors = require("cors");
const dotEnv = require("dotenv").config();

const emailRoutes = require("./server/routes/email-routes");

const PORT = process.env.PORT || 4000;

const app = express();
app.use(compression());
app.use(express.json());

const corsOptions = {
  origin: "https://diegomoura.dev",
};
app.use(cors());

// ---- APPLICATION API ---- //
app.use("/api/email", emailRoutes);

// ---- SERVE STATIC FILES ---- //
app.use(express.static(__dirname + "/server/views"));

// ---- SERVE APPLICATION PATHS ---- //
app.get("/*", function (req, res) {
  res.status(200).sendFile(path.join(__dirname + "/server/views/index.html"));
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