const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');
const router = express.Router();

  


//   router.get('/', (req, res) => {
//     pool.query('SELECT * FROM "pins" WHERE "user_id"=1;')
    
//         .then(result => res.send(result.rows))
//         .catch(error => {
//             console.log('error in SELECT query', error);
//             res.sendStatus(500);
//         });
// });

router.get('/', rejectUnauthenticated,(req, res) => {
    const queryText = `SELECT * FROM "pins" WHERE "user_id"=1;`
    pool.query(queryText)
      .then((result) => { res.send(result.rows),console.log('test');; })
      
      
      .catch((err) => {
        console.log('Error completing SELECT pins query', err);
        res.sendStatus(500);
      });
  });

  module.exports = router