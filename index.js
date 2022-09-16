const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./routes/index");

app.route("/", routes);

app.use(routes);

app.listen(port, () => {
    console.log(`Application listening on http://localhost:3000  or ${port}`);
});