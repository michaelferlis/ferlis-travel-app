const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

  router.get('/', rejectUnauthenticated,(req, res) => {
    const queryText = `SELECT * FROM "trips";`
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT trips query', err);
        res.sendStatus(500);
      });
  });



  router.post('/', (req, res) => {
    const newDay = req.body;
    const queryText = `INSERT INTO "trip_days" ("day", "city", "travel_information", "hotel", "restaurant_reservations", "day_comments", "trip_id")
    Values ('12-27-1988', 'insert city', 'insert travel', 'insert hotel', 'insert restaurant reservations', 'comments?', $1);`;
    const queryValues = [
      newDay.trip_id,
    ];
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing add day query', err);
        res.sendStatus(500);
      });
  });
  

  
      


  module.exports = router