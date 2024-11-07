// Initialize express module
const express = require("express");

//path module
const path = require("path");

// Initialize app
const app = express();

// Set the port
const HTTP_PORT = process.env.PORT || 4000;

//Middleware for the public folder
app.use(express.static(path.join(__dirname, "public")));

//Home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/index.html"));
});

//About route
app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "/views/about.html"));
});

//Server listening on port 4000
app.listen(HTTP_PORT, () => {
  console.log("HTTP server listening on http://localhost:" + HTTP_PORT);
});
