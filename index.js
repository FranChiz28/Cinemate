// to import dependencies
const express = require("express");
require("dotenv").config();
const path = require('path');
const ejs = require("ejs");
const bodyParser = require('body-parser');
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

app.set("view engine", "ejs");

app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'public')));

// JSON Server Setup
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);


app.use(express.urlencoded({extended:false}));

const routes = require("./routes/univRoutes");

app.use("/", routes);

app.listen(process.env.PORT, () => {
    console.log(`The server is listening at http://${process.env.HOSTNAME}:${process.env.PORT}`);
});

// This will start the json server
server.listen(process.env.JSONPORT, () => {
    console.log(`JSON Server is running on port ${process.env.JSONPORT}`);
});