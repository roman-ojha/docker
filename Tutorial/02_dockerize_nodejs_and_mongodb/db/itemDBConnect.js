const mongoose = require("mongoose");
const MongoDB_URI = process.env.MONGODB_URI;
const DB = process.env.DB_NAME;

// Connect to MongoDB
mongoose
  .connect(
    // "mongodb://mongo:27017/docker-node-mongo",
    // to connect to mongoDB we will not use localhost rather we will sue 'mongo' because 'mongo' will going to be the name of our service that's going to be our mongo container
    // so 'mongo' name should be similar as services name
    // NOTE: while running locally on machine without docker container the 'mongo' is not working right now so it looks like we have to put 'localhost for that reason'

    MongoDB_URI,
    { dbName: DB, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));
