/*
 Name: Nirajan Bist
 Student ID: 157716226
 Date: 2021/11/27
 Web322 - Lab 5 
 */

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
require("dotenv").config();

const { sequelize } = require("./models/postgresModel");
const postgresRoutes = require("./routes/postgresRoutes");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set EJS as templating engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Routes
app.use("/", postgresRoutes);

// Database connection and server startup
const PORT = process.env.PORT || 4250;

async function startServer() {
  try {
    await sequelize.authenticate();
    console.log("Database connection has been established successfully.");

    await sequelize.sync();
    console.log("Database synchronized successfully.");

    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(1);
  }
}

startServer();
