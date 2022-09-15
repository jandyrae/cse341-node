const show = require("express").Router();

const {name} = require("../controllers/index");

show.route("/", name);
// show.get("/", (name));

show.get('/', (req, res) => {
    res.send("Jason Kiger at routes index");
});

module.exports = show;
