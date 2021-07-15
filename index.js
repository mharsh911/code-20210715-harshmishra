const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let api = require('./routes/api');
app.use('/api', api );


app.listen(3001, () => {
	console.log("listening on port 3001.....");
});

module.exports = app;