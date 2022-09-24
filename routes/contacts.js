const app = require('express');
const express = app.Router();

const contactControl = require('../controllers/contacts');
express.get('/one', contactControl.getOne)
express.get('/', contactControl.getAll)

module.exports = {express};