const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String },
  bot: { type: Boolean },
  announcement: { type: String },
  permit: { type: String, default: "false" },
  afk: { type: String, default: "false" },
  afktime: { type: Number, default: 0 },
  afkReason: { type: String, default: "" },
  times: { type: Number, default: 0 },
  points: { type: Number, default: 0 },
  ni9ax: { type: Number, default: 0 },
  nojom: { type: Number, default: 0 },
  mosaba: { type: Number, default: 0 },
  ban: { type: String, default: "false" },
  alow: { type: String, default: "false" },
  haig: { type: String, default: "false" },
});

const sck1 = mongoose.model("Sck1", UserSchema);

module.exports = { sck1 };