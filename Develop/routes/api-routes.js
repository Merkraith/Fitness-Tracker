// const router = require("express").Router();
const Fitness = require("../models/fitness.js");

module.exports = function (app) {

app.get("/api/fitness", ({ body }, res) => {
  Fitness.find({})
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.post("/api/fitness", ({ body }, res) => {
  Fitness.create({})
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.put("/api/fitness/:id", (req, res) => {
  Fitness.findByIdAndUpdate(req.params.id, {$push: {expercies: req.body} })
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

app.get("/api/fitness/range", (req, res) => {
  Fitness.find({})
    .then(dbFitness => {
      res.json(dbFitness);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

}
