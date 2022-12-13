const express = require('express');
var bodyParser = require('body-parser');
const cors = require('cors')
const route = require('./routes/route.js');


const app = express();


app.use(cors({
  //origin:true,credentials:true
  'allowedHeaders': ['sessionId', 'Content-Type'],
  'exposedHeaders': ['sessionId'],
  'origin': '*',
  'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
  'preflightContinue': false


}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
 //mongodb+srv://Abhijith:Abhijith@cluster0.w7nwz.mongodb.net/abhijith?authSource=admin&replicaSet=atlas-darc46-shard-0&readPreference=primary&ssl=true

 //mongodb+srv://PankajKumar:ByiTM70OjwbN3c2l@cluster0.smhvx.mongodb.net/PankajKumar-DB
 const mongoose=require("mongoose")
   mongoose.connect("mongodb+srv://PankajKumar:ByiTM70OjwbN3c2l@cluster0.smhvx.mongodb.net/PankajKumar-DB?retryWrites=true&w=majority",
{
    useNewUrlParser : true 
})
.then(  () => console.log("MongoDB is Connected"))
.catch(err => console.log(err))



// middleware 
app.use(
  function(req,res, next){
    let date = new Date
    let ip = req.ip
    let url= req.url
console.log(date,ip,url) 
 next()
}
)
//Add this middleware at route level in the routes where applicable.

// app.use(function(req,res,next ) {

//   let token = req.headers["x-Auth-token"];
//     if (!token) token = req.headers["x-auth-token"];
  
//     if (!token) return res.send({ status: false, msg: "token must be present" });
  
//     console.log(token);
     
//     next()
//     let decodedToken = jwt.verify(token, "Jolly-LLB");
//     if (!decodedToken)
//       return res.send({ status: false, msg: "token is invalid" })
// })

//========================================================================================
app.use('/', route);

app.listen(process.env.PORT || 4000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});

 