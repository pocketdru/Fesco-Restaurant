const path = require("path");
const router = require("express").Router();


// If no API routes are hit, send the React app
router.get("/", function (req, res) {
        res.render("index.html");
});

router.use(function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

module.exports = router;