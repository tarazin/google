require('dotenv').config()

const express = require("express");

const mongoose =require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);


app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/googlebooks",
  { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);


app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});