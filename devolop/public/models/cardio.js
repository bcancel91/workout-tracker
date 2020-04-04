const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardio = new Schema({
  exercise_name: String,
  duration: Number,
  distance: Number,
  

});

const Cardio  = mongoose.model("Cardio", cardio);

module.exports = Cardio;
