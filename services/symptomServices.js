var Symptom = require("../models/symptom");

class SymptomServices {
  async addSymptom(data) {
    var sympton = new Symptom(data);
    await sympton.save();
    return sympton;
  }
  async getSymtom() {
    return await Symptom.find({});
  }

  async getSymptoms(symptomId) {
    const symptom = await Symptom.findOne({ _id: symptonId });
    if (!symptom) throw new customError("Symptom not found");
    return symptom;
  }

  async deleteSymptom(symptomId) {
    return await Symptom.findOneAndRemove({ _id: symptonId });
  }
}

module.exports = SymptomServices;
