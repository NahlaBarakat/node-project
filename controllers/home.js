var express=require("express")
var mongoose = require('mongoose'); 
var route=express.Router()
  var app = express();
var meals_data=[]





  route.get("/list",function(req,resp){
    mongoose.model("meals").find(function(err,data){
        console.log(data)
         resp.render("./home.ejs",{meals_data :data});



    })

    })


    
module.exports=route;