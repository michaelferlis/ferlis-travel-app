const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();


router.get('/', rejectUnauthenticated,(req, res) => {
    const queryText = `SELECT * FROM "city_guides";`
    pool.query(queryText)
      .then((result) => { res.send(result.rows),console.log('test');; })
      
      
      .catch((err) => {
        console.log('Error completing SELECT guides query', err);
        res.sendStatus(500);
      });
  });

//   router.post('/', rejectUnauthenticated, (req, res) => {
//     const addGuide = req.body;
//     console.log(req.body);
    
//     const queryText = `INSERT INTO "guides" ("guide_name", "information", "user_id") VALUES ($1, $2, $3);`;
  
//     const queryValues = [
//       addGuide.guide_name,
//       addGuide.information,
//       addGuide.user_id,
//     ];
//     pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing post guide query', err);
//       res.sendStatus(500);
//     });
// });



  router.post('/', rejectUnauthenticated, (req, res) => {
    const addGuide = req.body;
    console.log(req.body);
    
    const queryText = `INSERT INTO "city_guides" ("guide_name", "information", "user_id") VALUES ($1, $2, $3);`;
  
    const queryValues = [
      addGuide.guide_name,
      addGuide.information,
      addGuide.user_id,
    ];
    pool.query(queryText, queryValues)
    .then(() => { res.sendStatus(200); })
    .catch((err) => {
      console.log('Error completing post guide query', err);
      res.sendStatus(500);
    });
});

// router.post('/', (req, res) => {
//     const addPin = req.body;
//     console.log(req.body);
    
//     const queryText = `INSERT INTO "pins" ("pin_lat", "pin_long", "location", "user_id") VALUES ($1, $2, $3, $4);`;
  
//     const queryValues = [
//       addPin.pin_lat,
//       addPin.pin_long,
//       addPin.location,
//       addPin.user_id,
//     ];
//     pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing post pin query', err);
//       res.sendStatus(500);
//     });
// });



  module.exports = router