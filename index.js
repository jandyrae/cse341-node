const express = require("express");
const config = require("./config/index");
const bodyParser = require('body-parser');
const app = express();

const port = config.PORT || 8080;
const connectDB = require('./models/connectDB')

app
  // .use(bodyParser.urlencoded({ extended: false }))
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('Time: ', Date.now())
    next();
  })
  .use('/', require('./routes/index'));

app.listen(port, () => {
  console.log(`Application listening on http://localhost:8080/ or ${port}`);
});

connectDB().catch(console.error);