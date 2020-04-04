const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cardio = new Schema({
  exercise_name: {
    type: String,
    allowNull: false,
    required: "Exercise name required!"
  },
  duration: { 
    type: Number,
    allowNull: false,
    required: "Duration required!"
},
  distance: { 
    type: Float32Array,
    allowNull: true},
});

const Cardio  = mongoose.model("Cardio", cardio);

module.exports = Cardio;
