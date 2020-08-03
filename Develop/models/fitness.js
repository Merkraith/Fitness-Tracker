const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const fitnessSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [{
    type: {
      type: String,
      trim: true,
      required: "Enter exercise type: resistance or cardio"
    },
    name: {
      type: String,
      trim: true,
      required: "Exercise"
    },
    duration: {
      type: Number,
    },
    weight: {
      type: Number,
    },
    reps: {
      type: Number,
    },
    sets: {
      type: Number,
    },
    distance: {
      type: Number,
    },
  ]
})

const Fitness = mongoose.model("fitness", fitnessSchema);

module.exports = Fitness;