const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const resistance = new Schema({
  excercise_name: {
    type: String,
    unique: true,
    allowNull: false,
    required: "Exercise name required!"
  },
  weight:{ 
    type: Number,
    allowNull: true
  },
  reps:{ 
    type: Number,
    allowNull: true

  },
  sets:{
    type: Number,
    allowNull: true
  },
  duration:{
    type: Number,
    allowNull: false,
    required: "Duration required!"
  }
});

const Resistance  = mongoose.model("Resistance", resistance);

module.exports = Resistance;
