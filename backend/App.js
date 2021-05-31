import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import bcrypt from 'bcrypt';

import Competition from './models/competitionModel.js';
// import Scorecard from './models/ScorecardModel.js';
// import User from './models/userModel.js';

dotenv.config();

const { MONGO_URI } = process.env;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Create Mongoose connection
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  })
  .catch(err => console.log(err));

// Check mongoose connection
const db = mongoose.connection;

db.on('error', err => console.log(err));
db.once('open', () => console.log('Connected with climbTimeDB'));

//

app.post('/api/log-attempt', (req, res) => {
  // const { participant, round, newScore } = req.body;
  // const { climbNum, isClimbCompleted, attemptNum } = newScore;
});

// Check if scorecard exists for both userID and roundNum.
// Work out actual new score based on number of attempts.

// If scorecard already exists:
// Check if climbNum already has associated score, either add to current score or add new score.
// If scorecard does not exist:
// Create new scorecard and add details

app.get('/api/competitions', (req, res) => {
  Competition.find({}, (err, foundComps) => {
    if (!err) {
      res.json(foundComps);
    } else {
      console.log(err);
    }
  });
});

app.get('/api/competitions/:id', (req, res) => {
  Competition.findById(req.params.id, (err, foundComp) => {
    if (!err && foundComp) {
      res.json(foundComp);
    } else {
      res.status(404).json({ message: 'Competition not found!' });
    }
  });
});

//

const PORT = process.env.PORT || 3001;

app.listen(PORT || 3001, console.log(`Server running on port ${PORT}`));
