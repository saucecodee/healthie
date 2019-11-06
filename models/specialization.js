const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SpecializationSchema = new Schema({
  name: {
    type: string,
    required: true,
  },
});

module.exports = mongoose.model("Specialization", SpecializationSchema);
