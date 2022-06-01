
const mongoose = require('mongoose')

const ClassRoom = new mongoose.Schema(
  {
    roomNum: {
      type: number,
      required: true,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "department",
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "student",
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("classRoom", ClassRoom)