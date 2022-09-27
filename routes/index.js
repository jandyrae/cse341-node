const express = require("express");
const router = express.Router();
const {index, show} = require("../controllers/contacts");


router.get('/contacts', index);
router.get('/contacts/:id', show);

module.exports = router;
