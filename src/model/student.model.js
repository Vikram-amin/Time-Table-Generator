const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
    totalStudent: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("student", StudentSchema);
