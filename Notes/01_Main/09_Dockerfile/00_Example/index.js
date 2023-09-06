const express = require("express");
const fs = require("fs");
const path = require("path");
let { MongoClient, ServerApiVersion } = require("mongodb");
let bodyParser = require("body-parser");

const PORT = 3000;
const app = express();

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "/views/index.html"));
});

app.get("/profile-picture", (req, res) => {
  var img = fs.readFileSync(path.join(__dirname, "/assets/user.jpg"));
  res.writeHead(200, { "Content-Type": "image/jpg" });
  return res.end(img, "binary");
});

// use when starting application locally
let mongoURI = "mongodb://admin:password@localhost:27018";

const client = new MongoClient(mongoURI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// use when starting application as docker container
let mongoUrlDocker = "mongodb://admin:password@mongodb";

// pass these options to mongo client connect request to avoid DeprecationWarning for current Server Discovery and Monitoring engine
let mongoClientOptions = { useNewUrlParser: true, useUnifiedTopology: true };

// "user-account" in demo with docker. "my-db" in demo with docker-compose
let databaseName = "user-account";

app.post("/update-profile", async function (req, res) {
  try {
    let userObj = req.body;

    let db = client.db(databaseName);
    userObj["userid"] = 1;

    let myquery = { userid: 1 };
    let newvalues = { $set: userObj };

    // db.collection("users").updateOne(
    //   myquery,
    //   newvalues,
    //   { upsert: true },
    //   function (err, res) {
    //     if (err) throw err;
    //     client.close();
    //   }
    // );

    const user = await db.collection("users").insertOne(newvalues);
    return res.send(userObj);
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
});

app.get("/get-profile", async function (req, res) {
  try {
    let response = {};
    let db = client.db(databaseName);
    const user = await db.collection("users").findOne();
    res.send(user ? user : {});
  } catch (err) {
    console.log(err);
    return res.status(500);
  }
});

app.listen(PORT, () => {
  console.log(`running on http://localhost:${PORT}`);
});
