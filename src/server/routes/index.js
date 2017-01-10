const express = require('express');
const router = express.Router();
const knex = require('../db/connection');
// const indexController = require('../controllers/index');

router.get('/', getScores);
router.post('/', newScore);

function getScores (req, res, next) {
  return knex('high_scores').orderBy('total_score', 'desc').limit(10)
  .then(scores => {
    res.status(200).json({
      status: 'success',
      data: scores
    });
  })
  .catch(err => { return next(err); });
}

function newScore (req, res, next) {
  return knex('high_scores').insert(req.body).returning('*')
  .then((scores) => {
    res.status(201).json({
      status: 'success',
      data: scores
    });
  })
  .catch((err) => { return next(err); });
}

module.exports = router;
