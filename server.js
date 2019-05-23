const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define API routes here
// app.use(routes);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });

app.listen(PORT, () => {
    console.log(`🌎 ==> API server now on port ${PORT}!`);
  });