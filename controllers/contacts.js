const getDB = require("../models/connectDB");
const { ObjectId } = require("mongodb");

const index = async (req, res) => {
  const { firstName } = req.query;

  const filter = Object.fromEntries(
    Object.entries({ firstName }).filter(([_k, v]) => v)
  );

  const collection = await _collection();
  const documents = await collection.find(filter).toArray();

  res.json(documents);
};

const show = async (req, res) => {
  const collection = await _collection();
  const document = await collection
    .find({ _id: ObjectId(req.params.id) })
    .toArray();
  console.log(req.params.id)
  res.json(document[0]);
};

const _collection = async () => {
  try {
    const db = await getDB();
    return db.collection("contacts");
  } catch (error) {
    console.error("Error getting contacts collection", error);
  }
};

module.exports = { index, show };