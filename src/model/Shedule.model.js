const mongoose = require("mongoose");

const SheduleSchema = new mongoose.Schema(
  {
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      required: true,
    },

    classRoom: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "classRoom",
      required: true,
    },
    professor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "professor",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Shedule", SheduleSchema);
