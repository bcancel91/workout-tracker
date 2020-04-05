const router = require("express").Router();

const path = require("path");

const workout = require("../models/workouts.js")

router.get("/api/workouts", (req, res) => {
    workout.find({})
    .then(dbworkout => {
        res.json(dbworkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
    
  });

  router.get("/exercise", (req, res) => {

    res.json({})
  }); 

  router.post("/api/workouts", ({ body }, res) => {
    workout.create({})
      .then(dbworkout => {
        res.json(dbworkout);
      })
      .catch(err => {
        res.status(400).json(err);
      });
    });
  
    router.put("/api/workouts/:id", (req, res)=> {

       workout.update({_id:req.params.id},
        {$push:{exercises:req.body}},
        dbWorkout => {
            res.json(dbWorkout);
       })

    })
   
    router.get("/api/workouts/range",




































module.exports = router;