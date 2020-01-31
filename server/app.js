const Express = require("express");
const BodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectID;
var app = Express();
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));
app.listen(5000, () => {
    console.log("Now listening on port 5000...");
});

app.get("/", (req, res) => {
    res.send("home");
})

app.get("/meals", (req, res) => {
    res.send("success");
})