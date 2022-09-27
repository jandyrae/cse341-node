const express = require("express");
const config = require("./config/index");
const bodyParser = require('body-parser');
const app = express();

const port = config.PORT || 8080;
const connectDB = require('./models/connectDB')

app
  .use(bodyParser.json())
  .use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log('Time: ', Date.now())
    next();
  })
  .use('/', require('./routes'));

app.listen(port, () => {
  console.log(`Application listening on http://localhost:8080/contacts  or ${port}`);
});

connectDB().catch(console.error);