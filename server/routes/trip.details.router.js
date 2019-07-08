const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

  


//   router.put('/:id', (req, res) => {
//     const updatedtrip = req.body;
//     console.log(req.body);
    
//     const queryText = `UPDATE "trips"
//     SET "trip_comments" = $1,  
//     WHERE id=$2;`;
  
//     const queryText = [
//       updatedTrip.tripComments,
//       updatedTrip.id,
//     ];
//     pool.query(queryText, queryValues)
//     .then(() => { res.sendStatus(200); })
//     .catch((err) => {
//       console.log('Error completing SELECT day query', err);
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