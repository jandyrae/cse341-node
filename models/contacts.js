
// const { ObjectId} = require("mongodb");
// const {newEntry} = require('../controllers/contacts')

// // create new record in database

// const createContact = db.collection('contacts')
// .insertOne(newEntry, function(err, res) {
//     if (err) throw err;
//     console.log(`${res.insertedCount} document inserted`);
//     console.log(res.insertedIds);
//     db.close();
//   });

// // update existing record in database
// const updateContact = db.collection('contacts').updateOne([
//     // updateOne(filter, update, options, callback)
//     { _id: ObjectId(req.params.id) },
//     {firstName: ''},
//     {lastName: ''},
//     {email: ''},
//     {birthday: ''}
// ])

// // delete records from database
// const deleteContact = db.collection('contacts').deleteOne([
//     { _id: ObjectId(req.params.id) }
// ])

// module.exports = {createContact, updateContact, deleteContact}