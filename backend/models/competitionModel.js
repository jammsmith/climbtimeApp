import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const competitionSchema = new Schema({
  compName: { type: String, required: true },
  centreName: { type: String, required: true },
  centreLogo: { type: String, required: true },
  numOfRounds: { type: Number, required: true },
  categories: { type: [String], required: true },
  climbsPerRound: { type: Number, required: true }
});

const Competition = model('Competition', competitionSchema);

export default Competition;
