const express = require('express');
const app = express();

const competitions = require('./data/competitions');

// Create Mongoose connection
const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/climbTimeDB', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.catch((err) => console.log(err));

// Check mongoose connection
const db = mongoose.connection;

db.on('error', (err) => console.log(err));
db.once('open', () => console.log('Connected with local database'));

// Create Schemas & Models
const { Schema, model } = mongoose;

const userSchema = new Schema({
	fName: { type: String, required: true },
	lName: { type: String, required: true },
	yearOfBirth: Number,
	email: { type: String, required: true },
	userName: { type: String, required: true },
	password: { type: String, required: true },
	activeComps: {
		compName: String,
		currentScore: Number,
		currentPosition: Number,
	},
});

const centreSchema = new Schema({
	centreName: { type: String, required: true },
	centreUrl: { type: String, required: true },
	centreLocation: { type: String, required: true },
	centreLogo: { type: String, required: true },
	centreContactNum: Number,
});

const competitionSchema = new Schema({
	compName: { type: String, required: true },
	centreName: { type: String, required: true },
	numOfRound: { type: Number, required: true },
	roundDates: { type: Number, required: true },
	categories: [String],
});

const User = model('User', userSchema);
const Centre = model('Centre', centreSchema);
const Competition = model('Competition', competitionSchema);

//

// const addUser = () => {
// 	const newUser = new User({
// 		fName: 'James',
// 		lName: 'Smith',
// 		yearOfBirth: 1990,
// 		email: 'j.smith1710@gotmal.com',
// 		userName: 'js1710',
// 		password: 'jaghagfghaf',
// 		activeComps: {
// 			compName: 'Ice Bloc',
// 			currentScore: 98,
// 			currentPosition: 14,
// 		},
// 	});
// 	newUser.save();
// };

app.get('/', (req, res) => {});

app.get('/api/competitions', (req, res) => {
	res.json(competitions);
});

app.get('/api/competitions/:id', (req, res) => {
	const comp = competitions.find((c) => c._id == req.params.id);
	res.json(comp);
});

app.get('/api/competitions/:id/log-attempt', (req, res) => {
	const comp = competitions.find((c) => c._id == req.params.id);
	res.json(comp);
});

app.listen(3001, console.log('Server running on port 3001'));
