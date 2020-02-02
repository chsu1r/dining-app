const express = require("express");
const BodyParser = require("body-parser");
const mongoose = require("mongoose");

const api = require("./api");

const app = express();
// app.use(validator.checkRoutes);
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: true }));

app.listen(5000, () => {
    console.log("Now listening on port 5000...");
});

app.use("/api", api);

app.get("*", (req, res) => {
    res.send("Nothing to see here.");
});