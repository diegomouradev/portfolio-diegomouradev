const express = require("express");
const emailController = require("../controller/email-controller");

const router = express.Router();

router.route("/send-email").post(emailController.sendEmail);

module.exports = router;
