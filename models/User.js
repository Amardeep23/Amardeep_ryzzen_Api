const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type:String, required:true, unique:true
  },
  mobile: {
    type:String, required:true, unique:true
  },
  gender:{
    type:String, required:true
  },
  availableOnOne:{
    type:String, required:true
  },
  availableOnTwo:{
    type:String, required:true
  },
  company:{
    type:String, required:true
  },
  graduatedFrom:{
    type:String, required:true
  },
  profileLink:{
    type:String, required:true
  },
  resumeLink:{
    type:String, required:true
  },
},{
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);