const path = require("path");
const express = require("express");
const compression = require("compression");
const emailRoutes = require("./routes/emailRoutes");
const cors = require("cors");

const PORT = process.env.PORT || 4000;

const app = express();
var corsOptions = {
  origin: "https://www.diegomoura.dev",
};
app.use(cors(corsOptions));
app.use(express.json());

app.use(compression());

app.use("/api/email", emailRoutes);

app.listen(PORT, () => console.log(`App running on http://localhost:${PORT}`));
