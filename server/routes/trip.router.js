
const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();
router.get('/', rejectUnauthenticated,(req, res) => {
    const queryText = `SELECT * FROM "trips" JOIN "trip_days"
    ON "trip_days"."trip_id" = "trips"."id" ORDER BY "day";`
    pool.query(queryText)
      .then((result) => { res.send(result.rows); })
      .catch((err) => {
        console.log('Error completing SELECT trips query', err);
        res.sendStatus(500);
      });
  });


  

  router.post('/', rejectUnauthenticated, (req, res) => {
    const newTrip = req.body;
    

    const queryTextTrip = `INSERT INTO "trips" ("trip_name", "trip_comments")
    VALUES ($1, $2) RETURNING "id"; `
    pool.query(queryTextTrip, [newTrip.name, newTrip.tripComments] )
    .then (response =>{
      for (let day of newTrip.daysArray){

        const queryTextDay = `INSERT INTO "trip_days" ("day", "city", "travel_information", "hotel", "restaurant_reservations", "day_comments", "trip_id")
                      VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const queryValues = [
      day.date,
      day.city,
      day.travel,
      day.hotel,
      day.reservations,
      day.dayComments,
      response.rows[0].id,
      
      
    ];
    pool.query(queryTextDay, queryValues)
      .then(() => { res.sendStatus(201); })
      .catch((err) => {
        console.log('Error completing SELECT Day query', err);
        res.sendStatus(500);
      });





      }
    })
    
  });


  router.delete('/:id', (req, res) => {
    const queryText = 'DELETE FROM "trip_days" WHERE id=$1';
    pool.query(queryText, [req.params.id])
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT day query', err);
        res.sendStatus(500);
      });
  });

  router.put('/:id', (req, res) => {
    const updatedDay = req.body;
    console.log(req.body);
    
    const queryText = `UPDATE "trip_days"
    SET "day" = $1, 
    "city" = $2, 
    "travel_information" = $3, 
    "hotel" = $4, 
    "restaurant_reservations" = $5, 
    "day_comments" = $6 
    WHERE id=$7;`;
  
    const queryValues = [
      updatedDay.day,
      updatedDay.city,
      updatedDay.travel,
      updatedDay.hotel,
      updatedDay.reservations,
      updatedDay.dayComments,
      updatedDay.id,
    ];
  
    pool.query(queryText, queryValues)
      .then(() => { res.sendStatus(200); })
      .catch((err) => {
        console.log('Error completing SELECT day query', err);
        res.sendStatus(500);
      });
  });

  module.exports = router