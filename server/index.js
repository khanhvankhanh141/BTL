const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const userRoute = require("./routes/userRoute");
const errorHandler = require("./middleWare/errorMiddleware");

const app = express();

const PORT = process.env.PORT || 5000;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ROUTES MIDDLEWARE
app.use("/api/users", userRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("Hom Pages");
});
// ERROR MIDDLEWARE
app.use(errorHandler);
// CONNECT DB
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
