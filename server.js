const express = require("express");

const app = express();

app.get("/bmicalculator", function(request, response){
  console.log(request);
  response.send("<h1>hello</h1>");
});

app.post("/bmicalculator", function(request, response){
  response.send("my e-mail is: ");
});


app.listen(3000, function(){
  console.log("Server started on port 3000.");
});
