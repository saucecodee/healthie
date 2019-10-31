var Symptom = require("../models/symptom");

class SymptomServices {
  async addSymptom(data) {
    var symptom = new Symptom(data);
    await symptom.save();
    return symptom;
  }
  async getSymptom() {
    return await Symptom.find({});
  }

  async getSymptoms(symptomId) {
    const symptom = await Symptom.findOne({ _id: symptomId });
    if (!symptom) throw new customError("Symptom not found");
    return symptom;
  }

  async deleteSymptom(symptomId) {
    return await Symptom.findOneAndRemove({ _id: symptomId });
  }
}

module.exports = SymptomServices;
