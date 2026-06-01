const express = require("express");

const mongoose = require("mongoose");

const cors = require("cors");

const helmet = require("helmet");

const compression = require("compression");

require("dotenv").config();


// APP
const app = express();

app.set("trust proxy", true);
// =============================
// MIDDLEWARE
// =============================

app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
console.log("Trust Proxy:", app.get("trust proxy"));

app.use(express.json());

app.use(helmet());

app.use(compression());


// =============================
// DATABASE CONNECTION
// =============================

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB Error:", err);
  });


// =============================
// ROUTES
// =============================

const enrollmentRoute = require("./routes/enrollmentRoute");

const contactRoute = require("./routes/contactRoute");


app.use("/api", enrollmentRoute);

app.use("/api", contactRoute);


// =============================
// TEST ROUTE
// =============================

app.get("/", (req, res) => {

  res.status(200).json({
    success: true,
    message: "Backend Running Successfully",
  });

});


// =============================
// PORT
// =============================

const PORT = process.env.PORT || 5000;


// =============================
// SERVER
// =============================

app.listen(PORT, () => {

  console.log(`Server Started on Port ${PORT}`);

});