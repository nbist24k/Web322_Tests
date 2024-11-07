const express = require("express");
const app = express();
const data = require("./data/data.json");
const path = require("path");
const PORT = process.env.PORT || 3525;

// Serve static files like CSS
app.use(express.static("public"));

// Serve HTML file
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

// API endpoint to retrieve all entries
app.get("/api/data", (req, res) => {
  res.json(data);
});

// API endpoint to retrieve a single entry by ID
app.get("/api/data/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const entry = data.find((item) => item.id === id);

  if (entry) {
    res.json(entry);
  } else {
    res.status(404).json({ error: "Entry not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
