const express = require("express");
const mongoose = require("mongoose");
const requireDir = require("require-dir");
const cors = require("cors");

require("dotenv").config();

// init app
const app = express();
const port = 3001;
app.use(express.json());
app.use(cors());

//init db
const uri = "mongodb://localhost:27017/nodeapi";
// const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const db = mongoose.connection;
db.on("error", error => console.error(error));
db.once("open", () => console.log("Connected to Mongoose"));
requireDir("./src/models");

//Rotas
app.use("/api", require("./src/routes"));

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
