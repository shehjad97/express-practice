const express = require("express");
const httpStatus = require("http-status");

const router = express.Router();

const bookRoute = require("./book.route");
const memberRoute = require("./member.route");

router.use("/book", bookRoute);
router.use("/member", memberRoute);

module.exports = router;
