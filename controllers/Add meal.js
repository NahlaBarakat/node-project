var express=require("express")
var mongoose = require('mongoose'); 
var route=express.Router()
  var app = express();
 
var bodyParser= require("body-parser");
  app.set("view engine","ejs");
 app.set("views","./view");
 app.use(express.static("public"));

 
    var parseUrlencoded= bodyParser.urlencoded({extended: true})

 




route.post('/add' ,parseUrlencoded,function(req,resp){ 
//      mongoose.connect("mongodb://156.202.155.7/32/resturant",function(err){
//         console.log("data saved...")
// })    
    
            var name = req.body.name;
            var discription = req.body.discription;
           var price = req.body.price;
           
          
            var mealModel=mongoose.model("meals");
            var new_meal=new mealModel()
            new_meal.name=name;
            new_meal.discription=discription;
            new_meal.price=price;
           
            new_meal.save(function(err,result){
              
              console.log("data saved...");
              console.log(result)
            })
          
        resp.redirect("/list");
        });

         
      

          module.exports=route