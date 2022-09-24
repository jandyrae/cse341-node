const ObjectId = require('mongodb').ObjectId;
const contactDisplay = require("../routes/index");

const getOne = async (req, res, next) => {
    const userId = new ObjectId(req.params.id);
    // const database = client.db(process.env.DB_NAME);
    // const contacts = database.collection("contacts");
    const result = await mongodb
        .getDb()
        .db()
        .collection()
        .find({
            _id: userId
        });
        console.log(result);
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists[0]);
        // res.json(contactDisplay)
    });
};

const getAll = async (req, res, next) => {
    const result = await mongodb.getDb().db().collection('contacts').find();
    result.toArray().then((lists) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(lists);
    });
};

module.exports = {
    getOne,
    getAll
}