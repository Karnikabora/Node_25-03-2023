const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 4000;

const authorRoutes = require("./routes/authorRoutes");

// Connect to a database
mongoose.connect("mongodb+srv://batch6:herovired@cluster0.aqifkg2.mongodb.net/Batch7");

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Set up routes
app.use("/authors", authorRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});

