const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

  

  // router.get('/', rejectUnauthenticated, (req, res) => {
  //   const queryText = 'SELECT * FROM "trip_days";';
  //   pool.query(queryText)
  //     .then((result) => { res.send(result.rows); })
  //     .catch((err) => {
  //       console.log('Error completing SELECT trip query', err);
  //       res.sendStatus(500);
  //     });
  // });

  router.get('/:id', (req, res) => {
    pool.query('SELECT * FROM "trip_days" WHERE "trip_id"=$1 ORDER BY "day";', [req.params.id])
    
        .then(result => res.send(result.rows))
        .catch(error => {
            console.log('error in SELECT query', error);
            res.sendStatus(500);
        });
});

  

  module.exports = router