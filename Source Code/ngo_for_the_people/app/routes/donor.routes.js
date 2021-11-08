module.exports = app => {
    const donors = require("../controllers/donor.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Donor
    router.post("/", donors.create);
  
    // Retrieve all Donor
    router.get("/", donors.findAll);
  
    // Retrieve a single Donor with id
    router.get("/:id", donors.findOne);
  
    // Update an Donor with id
    router.put("/:id", donors.update);
  
    // Delete an Donor with id
    router.delete("/:id", donors.delete);
  
    app.use('/api/donors', router);
  };