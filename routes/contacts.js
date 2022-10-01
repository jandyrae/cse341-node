const express = require('express');
const router = express.Router();

const {getAll, getOne, createContact, deleteContact, updateContact} = require("../controllers/contacts");

router.get('/', getAll);
router.get('/:id', getOne);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);
router.post('/', createContact);

module.exports = router;