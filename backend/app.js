//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost:27017/tasklistDB', {useNewUrlParser: true});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));

//TODO

const listSchema = mongoose.Schema ({
    title: String,
    content: String
})

const List = mongoose.model("List", listSchema);


app.get("/lists", function(req, res) {
    List.find({}, function(err, foundLists){
        if(!err) {
            res.send(foundLists) 
        } else {
            res.send(err)
        }
    })
});

app.post("/lists", function(req, res) {

    const list = new List ({
        title: req.body.title,
        content: req.body.content
    })

    list.save(function(err) {
        if(!err) {
            res.send("Successfully added a new list.")
        } else {
            res.send(err)
        }
    })
})


app.listen(5000, function() {
  console.log("Server started on port 5000");
});