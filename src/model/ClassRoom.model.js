
const mongoose = require('mongoose')


const ClassRoom = new mongoose.Schema(
  {
    roomNum: {
      type: number,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("ClassRoom", ClassRoom)