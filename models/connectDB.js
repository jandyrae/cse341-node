const { MongoClient, ServerApiVersion } = require("mongodb");
const dotenv = require("dotenv");
dotenv.config();

// For memoizing the db for optimization
let db;

const getDB = async () => {
  if (db) return db;
  try {
    const client = new MongoClient(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverApi: ServerApiVersion.v1,
    });

    await client.connect();
    console.log(`Connected successfully to DB ${process.env.DB_NAME}`);
    db = client.db(process.env.DB_NAME);

    return db;
  } catch (error) {
    console.error("Error connecting to DB", error);
  }
};

module.exports = getDB;
