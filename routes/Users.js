const router = require("express").Router();
const User = require("../models/User");

//CREATE
router.post("/", async (req, res) => {
    
      const newUser = new User(req.body);
      try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
      } catch (err) {
        res.status(500).json(err);
      }
  });

  //DELETE
  router.delete("/:id",  async (req, res) => {
    
      try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("The user has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
  });

  //GET ALL

router.get("/",  async (req, res) => {
    
      try {
        const users = await User.find();
        res.status(200).json(users.reverse());
      } catch (err) {
        res.status(500).json(err);
      }
  });

  module.exports = router;