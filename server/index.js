const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middleWare/errorMiddleware");
const cookieParser = require("cookie-parser");

const app = express();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ROUTES MIDDLEWARE
app.use("/user", userRouter); //Done

// ERROR MIDDLEWARE
app.use(errorHandler);

// CONNECT DB
const PORT = process.env.PORT || 5000;

try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
} catch (err) {
  console.log(err);
}

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`);
});
