import mongoose from 'mongoose';
import dotenv from 'dotenv';

import centres from './data/centres.js';
import competitions from './data/competitions.js';
import users from './data/users.js';

import Centre from '../models/centreModel.js';
import Competition from '../models/competitionModel.js';
import Scorecard from '../models/scorecardModel.js';
import User from '../models/userModel.js';

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI, {
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

const addFakeData = async () => {
  try {
    await Centre.deleteMany();
    await Competition.deleteMany();
    await Scorecard.deleteMany();
    await User.deleteMany();

    await Centre.insertMany(centres);
    await Competition.insertMany(competitions);
    await User.insertMany(users);

    console.log('Data import successful.');
    process.exit(0);
  } catch (err) {
    console.error(`Fake data import failed: ${err}`);
    process.exit(1);
  }
};

const deleteAllData = async () => {
  try {
    await Centre.deleteMany();
    await Competition.deleteMany();
    await Scorecard.deleteMany();
    await User.deleteMany();

    console.log('Data deletion successful.');
    process.exit(0);
  } catch (err) {
    console.error(`Data deletion failed: ${err}`);
    process.exit(0);
  }
};

if (process.argv[2] === '-d') {
  deleteAllData();
} else {
  addFakeData();
}
