// const data = "<h1>CSE341-node controllers index connected<h1>";
const data = require('../contacts');
const app = require('express');
const express = app.Router();
const jsonRes = require("../middleware/jsonRes.js");
const openCors = require("../middleware/opencors.js");

// routes.get('/contacts', data);
// const index = (_req, res) => {
//   if (res.status(200)) {
//     res.setHeader("Access-Control-Allow-Origin", "*")
//     // res.json(data);
//   //   res.json({
//   //     "contact1": {
//   //         "firstName": "Trevor",
//   //         "lastName": "Kiger",
//   //         "email": "trevorkiger@gmail.com",
//   //         "favColor": "red",
//   //         "birthDay": "05/05/2005"
//   //     },
//   //     "contact2": {
//   //         "firstName": "Riley",
//   //         "lastName": "Kiger",
//   //         "email": "rileykiger@gmail.com",
//   //         "favColor": "purple",
//   //         "birthDay": "05/31/2007"
//   //     },
//   //     "contact3": {
//   //         "firstName": "Maximus",
//   //         "lastName": "Kiger",
//   //         "email": "maximuskiger@gmail.com",
//   //         "favColor": "blue",
//   //         "birthDay": "06/23/2010"
//   //     },
//   //     "contact4": {
//   //         "firstName": "Zander",
//   //         "lastName": "Kiger",
//   //         "email": "zwkiger@gmail.com",
//   //         "favColor": "green",
//   //         "birthDay": "06/15/2013"
//   //     },
//   //     "contact5": {
//   //         "firstName": "Henry",
//   //         "lastName": "Kiger",
//   //         "email": "hankkiger@gmail.com",
//   //         "favColor": "purple",
//   //         "birthDay": "03/01/2016"
//   //     }
  
//   // })
    
//   } else if (res.status(500)) {
//     res.send("Server error!");
//   }
// };
// express.use("/contacts", require("./contacts"));
const contactDisplay = (show) => {
    show.use([jsonRes, openCors]);
    show.use("/contacts", require("./contacts"));
    return show;
};
module.exports = {
 express, contactDisplay
};