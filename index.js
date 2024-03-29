"use strict";
/* --------------------------------------------------------------------------
    * NODEJS EXPRESS | Flight API
----------------------------------------------------------------------------- */
/*
    $ npm init -y
    $ npm i dotenv express express-async-errors jsonwebtoken mongoose morgan nodemailer redoc-express swagger-autogen swagger-ui-express
    
    // $ touch .env
    $ touch .gitignore
    https://www.toptal.com/developers/gitignore  (“node”) then copy paste
    
    $ mkdir logs
    $ nodemon
*/
/* -------------------------------------------------------------------------- */
//? Required Modules:
const express = require("express");
const app = express();

// envVariables to process.env:
require("dotenv").config();
const PORT = process.env?.PORT || 8000;

// asyncErrors to errorHandler:
require("express-async-errors");

/* -------------------------------------------------------------------------- */
//? Configrations:

// Connect to DB:
const { dbConnection } = require("./src/configs/dbConnection");
dbConnection();

/* -------------------------------------------------------------------------- */
//? Middlewares:

// Accept JSON:
app.use(express.json());

// Check Token:
app.use(require("./src/middlewares/authentication"));

// morgan-logger:
// app.use(require("./src/middlewares/logger")); //*IN Comment coz of Deployment

// res.getModelList:
app.use(require("./src/middlewares/findSearchSortPage"));

/* -------------------------------------------------------------------------- */
//? Routes:
// HomePath:
app.all("/", (req, res) => {
  res.send({
    error: false,
    message: "Welcome to Flight API",
    isLogin: req.isLogin,
    documents: {
      swagger: "/documents/swagger",
      redoc: "/documents/redoc",
      json: "/documents/json",
    },
    user: req.user,
  });
});

// token:
app.use("/tokens", require("./src/routes/token"));

// auth:
app.use("/auth", require("./src/routes/auth"));
// user:
app.use("/users", require("./src/routes/user"));
// flight:
app.use("/flights", require("./src/routes/flight"));
// passenger:
app.use("/passengers", require("./src/routes/passenger"));
// reservation:
app.use("/reservations", require("./src/routes/reservation"));

// document:
app.use("/documents", require("./src/routes/document"));

/* -------------------------------------------------------------------------- */
//? errorHandler:
app.use(require("./src/middlewares/errorHandler"));

/* -------------------------------------------------------------------------- */
//? RUN SERVER:
app.listen(PORT, () => console.log("http://127.0.0.1:" + PORT));

/* -------------------------------------------------------------------------- */
//? Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clears database.
