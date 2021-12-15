const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

const portNumber = 8080;
const jsonDirectory = __dirname + "/responses";
const baseUrl = "/api";
const encoding = "utf8";
const contentType = "application/json";
const timeout = 3000;

// Enabling CORS
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Auth-Token, Auth-Schema"
  );
  res.header("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE, OPTIONS");
  next();
});

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

// Mock APIs
app.post(`${baseUrl}/employees`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(
    `${jsonDirectory}/employee/getEmployees.json`,
    encoding,
    (err, data) => {
      setTimeout(() => {
        console.log("Get Request Body: ", req.body);
        // res.status(500).end(data);
        res.end(data);
      }, timeout);
    }
  );
});

app.get(`${baseUrl}/employee/:id`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(
    `${jsonDirectory}/employee/getEmployee.json`,
    encoding,
    (err, data) => {
      setTimeout(() => {
        console.log("Get ID: ", req.params.id);
        // res.status(500).end(data);
        res.end(data);
      }, timeout);
    }
  );
});

app.post(`${baseUrl}/employee`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(
    `${jsonDirectory}/employee/createEmployee.json`,
    encoding,
    (err, data) => {
      setTimeout(() => {
        console.log("Create Request Body: ", req.body);
        // res.status(500).end(data);
        res.end(data);
      }, timeout);
    }
  );
});

app.put(`${baseUrl}/employee/:id`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(
    `${jsonDirectory}/employee/updateEmployee.json`,
    encoding,
    (err, data) => {
      setTimeout(() => {
        console.log("Update Request Body: ", req.body);
        // res.status(500).end(data);
        res.end(data);
      }, timeout);
    }
  );
});

app.delete(`${baseUrl}/employee/:id`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(
    `${jsonDirectory}/employee/deleteEmployee.json`,
    encoding,
    (err, data) => {
      setTimeout(() => {
        console.log("Delete ID: ", req.params.id);
        // res.status(500).end(data);
        res.end(data);
      }, timeout);
    }
  );
});

var server = app.listen(portNumber, function () {
  console.log(`Mock apis running at http://localhost:${portNumber}${baseUrl}`);
});
