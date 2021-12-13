const express = require("express");
const app = express();
const fs = require("fs");
const bodyParser = require("body-parser");

const portNumber = 8080;
const jsonDirectory = __dirname + "/responses";
const baseUrl = "/api";
const encoding = "utf8";
const contentType = "application/json";

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
app.get(`${baseUrl}/todos`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(`${jsonDirectory}/todosResponse.json`, encoding, (err, data) => {
    // res.status(500).send({ description: "Some error occured in the server" });
	setTimeout(() => {
		res.end(data);
	}, 3000);
  });
});

app.get(`${baseUrl}/hello/:firstName`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(`${jsonDirectory}/sampleResponse.json`, encoding, (err, data) => {
    console.log("First Name: ", req.params.firstName);
    // res.status(500).send({ description: "Some error occured in the server" });
    res.end(data);
  });
});

app.post(`${baseUrl}/hello/:firstName`, function (req, res) {
  res.set("Content-Type", contentType);
  fs.readFile(`${jsonDirectory}/sampleResponse.json`, encoding, (err, data) => {
    console.log("First Name: ", req.params.firstName);
    // res.status(400).send({ description: "Input is invalid" });
    res.end(data);
  });
});

var server = app.listen(portNumber, function () {
  console.log(`Mock apis running at http://localhost:${portNumber}`);
});
