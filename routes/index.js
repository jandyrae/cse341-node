const show = require("express").Router();

const {index} = require("../controllers/index");

// show.route("/", name);

show.get("/", index);

// show.get('/', (_req, res) => {
//     res.send(name.index);
// });

// show.get('/', (req, res) => {
//     res.send("Jason Kiger at routes index");
// });

module.exports = show;