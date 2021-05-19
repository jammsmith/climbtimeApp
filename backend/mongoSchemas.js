const mongoose = require('mongoose');
const { Schema } = mongoose;

const requiredString = { type: String, required: true };
const requiredNum = { type: Number, required: true };

const userSchema = new Schema({
	fName: requiredString,
	lName: requiredString,
	userName: requiredString,

	// activeComps: Number,
	// email: requiredString,
	// yearOfBirth: Number,
	// password: requiredString,
});

const centreSchema = new Schema({
	centreName: requiredString,
	centreUrl: requiredString,
	centreLocation: requiredString,
	centreLogo: requiredString,
	centreContactNum: Number,
});

const competitionSchema = new Schema({
	compName: requiredString,
	centreName: requiredString,
	numOfRound: requiredNum,
	roundDates: requiredNum,
	categories: [String],
	climbsPerRound: requiredNum,
	currentScores: {
		userName: userSchema,
		roundOneScore: Number,
		roundTwoScore: Number,
		roundthreeScore: Number,
		roundFourScore: Number,
	},
});

const scoreSchema = new Schema({
	climbNum: Number,
	climbCompleted: Boolean,
	attemptsNum: Number,
});

module.exports = { userSchema, centreSchema, competitionSchema, scoreSchema };
