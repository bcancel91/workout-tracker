const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistance = new Schema({
  excercise_name: String,
  weight: Number,
  reps: Number,
  sets: Number,
  duration: Number,
});

const Resistance  = mongoose.model("Resistance", resistance);

module.exports = Resistance;
