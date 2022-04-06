//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const cors = require("cors")



const app = express();


mongoose.connect('mongodb://localhost:27017/tasklistDB', {useNewUrlParser: true});

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.json());

app.use(express.static("public"));

app.use(cors());
//TODO

const listSchema = mongoose.Schema ({
    title: String,
    content: String
})

const List = mongoose.model("List", listSchema);


app.get("/lists", function(req, res) {
    List.find({}, function(err, foundLists){
        if(!err) {
            res.json(foundLists) 
        } else {
            res.send(err)
        }
    })
})

app.post("/keeper/notes/", function(req, res) {

    const {title, content} = req.body;

    const list = new List ({
        title, content
    }) 

	list.save();

    res.json( req.body )



})


app.listen(5000, function() {
  console.log("Server started on port 5000");
});