const mongoose = require("mongoose");

const AppointmentSchema = new mongoose.Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  therapistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Therapist",
    required: true,
  },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  sessionType: {
    type: String,
    enum: ["video", "audio", "text"],
    required: true,
  },
  status: {
    type: String,
    enum: ["Scheduled", "Completed", "Cancelled"],
    default: "Scheduled",
  },
  notes: { type: String },

  videoCallUrl: {
    type: String,
    default: function () {
      return `TherapEase_${this._id}`;
    },
  },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
