var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var meals = new Schema({
 name: String,
 discription: String,
 price:Number


});

mongoose.model("meals",meals);
