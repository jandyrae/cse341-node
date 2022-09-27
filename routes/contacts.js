const app = require('express');
const express = app.Router();
const contactControl = require('../controllers/contacts');

// express.get('/one', (req, res, next) => {
//     res.json(contactControl.getOne)
// })
express.get('/one', contactControl.getOne)
express.get('/', contactControl.getAll);

module.exports = {express};