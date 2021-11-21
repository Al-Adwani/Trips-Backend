const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
// Routes
const userRoute = require("./api/user/user.routes");
// DB
const connectDB = require("./db");

// Middleware
const errorHandler = require("./middleware/errorHandler");



// Passport
const { localStrategy, jwtStrategy } = require("./middleware/passport");
const app = express();

connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Passport
app.use(passport.initialize());
passport.use(localStrategy);
passport.use(jwtStrategy);
// Routes
app.use("/api", userRoute);

app.use(errorHandler);

app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
