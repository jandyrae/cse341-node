const show = require("express").Router();
const {
    index
} = require("../controllers/index");

show.get("/", index);

module.exports = show;