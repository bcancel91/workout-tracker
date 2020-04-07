const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workouts = new Schema({
    day: {
    type: Date, default: Date.now
  },
    exercises: [{
      type: {
        type: String,
        allowNull: false,
      },
      name: {
        type: String,
        allowNull: true,
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
        allowNull: true,
      },
      distance: { 
        type: Number,
        allowNull: true},
    }],
},  
  {
  toObject: {
    virtuals: true
  },
  toJSON: {
    virtuals: true
  }
});
workouts
.virtual('totalDuration')
.get(function () {
  let sum = 0;
  this.exercises.forEach(exercise => {
    sum += exercise.duration;
    
  });
  return sum;
});

  

const  Workouts = mongoose.model("Workouts", workouts);



module.exports = Workouts;


