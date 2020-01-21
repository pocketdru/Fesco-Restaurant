const path = require("path");
const router = require("express").Router();


// If no API routes are hit, send the React app
router.use("/", "../client/build/index.html");

module.exports = router;