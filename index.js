// const { response } = require('express');
const express = require("express");
const bodyParser = require("body-parser");
let app = express();
var http = require("http");
const autoRouter = require("./router/auto");
const userRouter = require("./router/user")
const port = 4016;

app.use(function (req, res, next) {
  console.log("before", req.body);
  next();
});

app.use(bodyParser());

app.use(function (req, res, next) {
    // req.body = {"jhb":"sdn"}
  req.originalUrl == "/" ? console.log("ABC"): console.log("DCE")
  next();
});

app.listen(port, () => {
  console.log(`Run successfully in port! ${port}`);
});

// http.createServer(function (req, res) {
//     // res.writeHead(200, {'Content-Type': 'text/plain'});
//     // res.end('Hello World!');
//     console.log("run ")

//     res.end('Hello World');
//   }).listen(8080);


app.use("/auto", autoRouter);
app.use("/user", userRouter);

app.use("*", (req, res) => {
  console.log("---------------------------------------------");
  res.send("404");
  // res.send("-------------------------------")
});


app.post("/redirectroute", (req, res) => {
  const obj = {
    fname: "Anuj",
    lname: "Kumar",
    age: 25,
    fullname: function () {
      return this.fname + " " + this.lname;
    },
  };
  res.send(obj.fullname());
});
