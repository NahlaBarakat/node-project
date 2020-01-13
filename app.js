var express=require('express')
var path=require('path')
var mongoose = require('mongoose')
var bodyParser= require("body-parser")
var fs=require('fs')
var Addmeal=require('./controllers/Add meal')
var gohome=require('./controllers/home')

//var orderdetails=require('./controllers/Order details')
//var orderslist=require('./controllers/Orders list')


var parseUrlencoded= bodyParser.urlencoded({extended: true})

var app=express()
app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.set('views','view')

app.use('/Addmeal',Addmeal)
app.use('',gohome)
//app.use('/order detail',orderdetails)
//app.use('/orders list',orderslist)
app.use(function(req,resp,next){
    resp.setHeader("Access-Control-Allow-Origin","*");
    resp.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next()
  })
  app.use(bodyParser.json()); 
  
app.get('/home',function(req,res,next){
    res.render('./home')
})



app.get('/addmeal/add',function(req,res,next){
  res.render('add-meal.ejs')
})

mongoose.connect("mongodb://127.0.0.1:27017/restaurant",function(err){
    console.log("saved...")
  });

  var files_arr=fs.readdirSync (__dirname+"/model")
  files_arr.forEach(function(file){
    require(__dirname+"/model/"+file);
  });



app.listen(27017,function(){
    console.log("server running")
})