import * as mongoose from 'mongoose';

const ChatSchema = new mongoose.Schema({
  room: String,
  nickname: String,
  message: String,
  updated_at: { type: Date, default: Date.now }
});

// Création du model associé
export const Chat = mongoose.model('chat', ChatSchema);
