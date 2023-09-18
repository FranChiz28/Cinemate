// to import dependencies
const express = require("express");
require("dotenv").config();
const ejs = require("ejs");
const mongoose = require ("mongoose");
const session = require("express-session");
const {v4: uuidv4 } = require('uuid');

//express app
const app = express();

app.use(session({
    secret: uuidv4(),
    resave: false,
    saveUninitialized: true,
    cookie: {secure:false}
}));

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>app.listen(process.env.PORT, () => {
    console.log(`The server is listening at http://${process.env.HOSTNAME}:${process.env.PORT}`);
}))
.catch((err)=> console.log(err));

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(express.urlencoded({extended:false}));

const loginRoutes = require("./routes/loginRoutes");
const signupRoutes = require("./routes/signupRoutes");
const logoutRoutes = require("./routes/logoutRoutes");
const dashRoutes = require("./routes/dashRoutes");
const movieRoutes = require("./routes/movieRoutes");
const reserveRoutes = require("./routes/reserveRoutes");

app.use("/", loginRoutes);
app.use("/login", loginRoutes);
app.use("/logout", logoutRoutes);
app.use("/signup", signupRoutes);
app.use("/dashboard", dashRoutes);
app.use("/movieInfo", movieRoutes);
app.use("/reserve", reserveRoutes);
