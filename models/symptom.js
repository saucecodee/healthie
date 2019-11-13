const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SymptomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  imgUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Symptom", SymptomSchema);
