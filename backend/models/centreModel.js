import mongoose from 'mongoose';

const { Schema, model } = mongoose;

export const centreSchema = new Schema({
  centreName: { type: String, required: true },
  centreUrl: { type: String, required: true },
  centreLogo: { type: String, required: true }
});

const Centre = model('Centre', centreSchema);

export default Centre;
