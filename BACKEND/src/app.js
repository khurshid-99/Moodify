const express = require("express");
const cookieParser = require("cookie-parser");


const app = express();

app.use(express.json());
app.use(cookieParser());


// Routes
const authRoutes = require("./routes/auth.routes");

// auth routes
app.use("/auth/api", authRoutes)

module.exports = app;
