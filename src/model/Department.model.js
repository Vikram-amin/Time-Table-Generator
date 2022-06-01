
const mongoose = require('mongoose')

const DepartmentSchema = new mongoose.Schema( {
    name: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("department", DepartmentSchema);