const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

  router.get('/', rejectUnauthenticated,(req, res) => {
    
    const queryText = `SELECT "trip_name", "trips"."id" AS "id", "user_id", "complete"  FROM "trips"

    JOIN "user_trips" ON "user_trips"."trip_id" = "trips"."id"
    JOIN "user" ON "user_trips"."user_id" = "user"."id"
    WHERE "user_id" = $1 ORDER BY "trip_name";
    `
    pool.query(queryText, [req.user.id])
      .then((result) => { console.log('trip name router',result.rows);res.send(result.rows ); })
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

  router.put('/:id', (req, res) => {
    const markComplete = req.body;
    console.log(req.body);
    
    const queryText = `UPDATE "trips"
    SET "complete" = 'true' 
    WHERE "id"= $1;`;
  
    const queryValues = [
      markComplete.id,
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT day query', err);
        res.sendStatus(500);
      });
  });
  

  
      


  module.exports = router