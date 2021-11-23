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

app.use(cors());

// ---- APPLICATION API ---- //
app.use("/api/email", emailRoutes);

// ---- SERVE STATIC FILES ---- //
app.use(express.static(path.join(__dirname + "/server/views/")));

// ---- SERVE APPLICATION PATHS ---- //
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/server/views/index.html"));
});

// ---- START UP THE NODE SERVER  ----
app.listen(PORT);
