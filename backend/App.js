const express = require('express');
const app = express();

const competitions = require('./data/competitions');
const mongoSchemas = require('./mongoSchemas');

// Create Mongoose connection
const mongoose = require('mongoose');

const mongoUrl =
	'mongodb+srv://admin-james01:TEST123@climbtime.zr5a2.mongodb.net/climbTimeDB';

mongoose
	.connect(mongoUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.catch((err) => console.log(err));

// Check mongoose connection
const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected with climbTimeDB'));

// Import Schemas and create models
const { model } = mongoose;
const { userSchema, centreSchema, competitionSchema, scoreSchema } =
	mongoSchemas;

const User = model('User', userSchema);
const Centre = model('Centre', centreSchema);
const Competition = model('Competition', competitionSchema);
const Score = model('Score', scoreSchema);

// Test add to DB
const addUser = () => {
	const newUser = new User({
		fName: 'James',
		lName: 'Smith',
		userName: 'js1710',
	});
	newUser.save();
};

//

app.get('/', (req, res) => {});

app.get('/api/competitions', (req, res) => {
	res.json(competitions);
});

app.get('/api/competitions/:id', (req, res) => {
	const comp = competitions.find((c) => c._id == req.params.id);
	res.json(comp);
});

app.listen(3001, console.log('Server running on port 3001'));
