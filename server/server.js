
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const newTripRouter = require('./routes/trip.router');
const TripNameRouter = require('./routes/trip.name.router');
const TripDetailsRouter = require('./routes/trip.details.router');
const TripDayDetailsRouter = require('./routes/trip.day.details.router');
const pinsRouter = require('./routes/pins.router')
const guideRouter = require('./routes/guide.router')
const testRouter = require('./routes/test.router')
// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/newtrip', newTripRouter);
app.use('/api/name', TripNameRouter);
app.use('/api/details', TripDetailsRouter);
app.use('/api/daydetails', TripDayDetailsRouter);
app.use('/api/pins', pinsRouter)
app.use('/api/guides', guideRouter)
app.use('/api/test', testRouter)



// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
