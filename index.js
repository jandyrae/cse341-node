// console.log("hello world!");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");


app.route("/", routes);

app.get("/", (_req, res) => {
    res.send("Jaynann Perrett at root index");
});

// app.get("/foo", function (req, res) {
//   res.send("bar");
// });

// app.get("/foo/bar", function (req, res) {
//   res.send("test");
// });

app.listen(port, () => {
    console.log(`Application listening on http://localhost:3000  or ${port}`);
});

module.exports = app;