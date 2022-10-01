const getDB = require("../models/connectDB");
const { ObjectId } = require("mongodb");

// retrieve all json in database GET
const getAll = async (req, res, next) => {
  const { firstName } = req.query;
  // takes the list and makes an object
  const filter = Object.fromEntries(
    Object.entries({
      firstName,
    }).filter(([_k, v]) => v)
  );
  const collection = await _collection();
  const documents = await collection.find(filter).toArray();
  res.json(documents);
};

// retrieve one document by id GET
const getOne = async (req, res, next) => {
  const collection = await _collection();
  const document = await collection
    .find({
      _id: ObjectId(req.params.id),
    })
    .toArray();
  console.log(ObjectId(req.params.id));
  res.json(document[0]);
};

// try catch to access database, used in functions
const _collection = async () => {
  try {
    const db = await getDB();
    return db.collection("contacts");
  } catch (error) {
    console.error("Error getting contacts collection", error);
  }
};

// create new record in database POST 201
const createContact = async (req, res, next) => {
  const collection = await _collection();
  const { firstName, lastName, email, favoriteColor, birthday } = req.body;
  const document = await collection.insertOne(
    {
      firstName,
      lastName,
      email,
      birthday,
      favoriteColor,
    },
    function (err, result) {
      if (err) throw err;
      console.log(`${result.insertedCount} document inserted`);
    }
  );
  res.status(201);
  res.json(req.body);
};

// update existing record in database PUT 204
const updateContact = async (req, res, next) => {
  try {
    const collection = await _collection();
    // Mongo will give an id if one isn't provided (required)
    const { firstName, lastName, email, favoriteColor, birthday } = req.body;
    const document = await collection.updateOne(
      {
        _id: ObjectId(req.params.id),
      },
      {
        $set: {
          firstName,
          lastName,
          email,
          birthday,
          favoriteColor,
        },
      }
    );
    res.status(204);
    res.json(req.body);

  } catch (err) {
    next(err);
  }
};

// delete records from database DELETE 200
const deleteContact = async (req, res, next) => {
  try {
    const collection = await _collection();
    const document = await collection.deleteOne({
      _id: ObjectId(req.params.id),
    });
    res.status(200);
    res.json(document);

  } catch (err) {
    next(err);
  }
};


// const request = require('request');

// const options = {
//   method: 'GET',
//   url: 'https://api.render.com/v1/services?limit=20',
//   headers: {
//     accept: 'application/json',
//     authorization: `Bearer ${process.env.RENDER_APIKEY}`
//   }
// };

// request(options, function (error, response, body) {
//   if (error) throw new Error(error);

//   console.log(body);
// });



module.exports = {
  getAll,
  getOne,
  createContact,
  updateContact,
  deleteContact,
};
