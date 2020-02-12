var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // 1. Add a join to include all of each Author's Posts
    
      res.sendFile("index.html");
    });
  

  app.get("/login", function(req, res) {
    res.sendFile("../public/login.html")
    //   dbUsers.findOne({
    //     where:{
    //       userName:req.body.userName
    //     }
    //   })
    // });
  });
  app.get("/signup", function(req,res){
    res.sendFile("../public/signup.html");
  });
  

  app.post("/signup", function(req, res) {
    db.Users.create(req.body).then(function(dbUsers) {
      res.json(dbUsers);
    });

  });
}