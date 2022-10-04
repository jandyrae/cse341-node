const getDB = require("../models/connectDB");
const { ObjectId } = require("mongodb");

const getAll = async (req, res, next) => {
  // retrieve all json in database GET
  /* #swagger first name is not needed to execute this GET*/
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

const getOne = async (req, res, next) => {
  // retrieve one document by id GET
  /* #swagger.test an id to test 632e9370ac262785f13f4f38*/
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

const createContact = async (req, res, next) => {
  /* #swagger For testing purposes use 
  {
    "firstName":"First",
    "lastName":"Last",
    "email":"email@gmail.com",
    "birthday":"2010-06-23T07:00:00.000Z",
    "favoriteColor":"anyColor"
}
  */
  // create new record in database POST 201
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
  console.log(document);
};

const updateContact = async (req, res, next) => {
  /* #swagger For testing purposes use 
  {
    "firstName":"FirstChange",
    "lastName":"LastChange",
    "email":"emailChange@gmail.com",
    "birthday":"2022-08-12",
    "favoriteColor":"anyColor"
}
  */
  // update existing record in database PUT 204
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
    console.log(document);
  } catch (err) {
    next(err);
  }
};

const deleteContact = async (req, res, next) => {
  /* #swagger delete requires an id to delete use one shown from calling a GET
   */
  // delete records from database DELETE 200
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
