const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require('dotenv');
dotenv.config();

// For memoizing the db
let db;

const initialize = async () => {
  if (db) return db;
  try {
    const client = new MongoClient(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    await client.connect();
    console.log("Connected successfully to DB");
    db = client.db('CSE341');

    return db;
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = initialize;