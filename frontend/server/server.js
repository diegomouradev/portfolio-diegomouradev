const path = require("path");
const express = require("express");
const compression = require("compression");
const mailjet = require("node-mailjet");
const emailRoutes = require("./routes/emailRoutes");

mailjet.connect(
  "60c16b936e5494f9d1c6c5c93609b627",
  "e7c201dcd09adf143a128ca8ad2a62a8"
);

const CONTEXT = `/${process.env.CONTEXT || "portfolio"}`;
const PORT = process.env.PORT || 4000;

const app = express();

app.use(express.json());
app.use(compression());
app.use(CONTEXT, express.static(path.resolve(__dirname, "../dist/portfolio")));
app.use("/", express.static(path.resolve(__dirname, "../dist/portfolio")));

app.use("/api/email", emailRoutes);

app.listen(PORT, () =>
  console.log(`App running on http://localhost:${PORT}${CONTEXT}`)
);
