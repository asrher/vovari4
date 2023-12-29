const mongoose = require('mongoose');
const GroupSchema = new mongoose.Schema({
id: { type: String,  unique: true ,required: true },
events: { type: String, default: "true" },
botenable: { type: String, default: "true" },
ktt: { type: String, default: "true" },
chatt: { type: String, default: "false" },
nsfw: { type: String, default: "false" },
pdm : { type: String, default: "false" },
disablecmds : { type: String, default: "false" },
welcome:{ type: String, default: "السلام عليكم @منشن ، @صورة \n انرت/ي في @اسم  \n @وصف " },
goodbye:{ type: String, default: " الله يوفقك @منشن" },
antilink: { type: String, default: "false" },
antipromote: { type: String, default: "false" },
antidemote: { type: String, default: "false" },
economy: { type: String, default: "false" },
lvl: { type: String, default: "false" },
istimara: { type: String, default: "false" },
cmdAlias: { type: Object, default: {} },
mute: { type: String },
unmute: { type: String }
})
const sck =mongoose.model("Sck", GroupSchema)
module.exports = { sck }