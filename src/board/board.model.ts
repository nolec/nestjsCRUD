import * as mongoose from 'mongoose';

export const BoardSchema = new mongoose.Schema({
  writer: {
    type: String,
    required: true,
    unique: true,
    maxlength: 10,
  },
  title: {
    type: String,
    required: true,
    maxlength: 20,
  },
  contents: {
    type: String,
    required: true,
    maxlength: 100,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

export interface Board extends mongoose.Document {
  id: string;
  writer: string;
  title: string;
  contents: string;
  date: Date;
}
