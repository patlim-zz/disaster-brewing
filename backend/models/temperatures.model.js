const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const temperaturesSchema = new Schema({
  timestamp: { type: String, required: true },
  temperature: { type: Number, required: true },
  hot_switch: { type: Number, required: true},
  cold_switch: { type: Number, required: true },
  setpoint: { type: Number, required: true }
}, {
  timestamps: true,
})

const Temperatures = mongoose.model('Temperatures', temperaturesSchema)

module.exports = Temperatures;