import mongoose from 'mongoose';
import { userSchema } from './userModel.js';
import { competitionSchema } from './competitionModel.js';

const { Schema, model } = mongoose;

export const ScorecardSchema = new Schema({
  participant: userSchema,
  competition: competitionSchema,
  roundNum: { type: Number, required: true, default: 1 },
  score: {
    climb1: {
      isAttempted: { type: Boolean, required: true, default: false },
      isCompleted: { type: Boolean, required: true, default: false },
      attemptsNum: { type: Number, required: true, default: 0 }
    },
    climb2: {
      isAttempted: { type: Boolean, required: true, default: false },
      isCompleted: { type: Boolean, required: true, default: false },
      attemptsNum: { type: Number, required: true, default: 0 }
    },
    climb3: {
      isAttempted: { type: Boolean, required: true, default: false },
      isCompleted: { type: Boolean, required: true, default: false },
      attemptsNum: { type: Number, required: true, default: 0 }
    },
    climb4: {
      isAttempted: { type: Boolean, required: true, default: false },
      isCompleted: { type: Boolean, required: true, default: false },
      attemptsNum: { type: Number, required: true, default: 0 }
    },
    climb5: {
      isAttempted: { type: Boolean, required: true, default: false },
      isCompleted: { type: Boolean, required: true, default: false },
      attemptsNum: { type: Number, required: true, default: 0 }
    }
  }
});

const Scorecard = model('Scorecard', ScorecardSchema);

export default Scorecard;
