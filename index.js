const express = require('express');
const app = express();
const routes = require("./routes/index");
const jsonRes = require('jsonresponse');

const port = process.env.PORT || 3000;
const {
    connectDB
} = require("./models/connectDB");

app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.type('application/json', jsonRes )
        next();
        
    });
// app.get('/', require('./routes/index'));

app.listen(port, () => {
    console.log(`Application listening on http://localhost:3000/ or ${port}`);
});

connectDB().catch(console.error);
module.exports = {
    app
}