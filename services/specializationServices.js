var Specialization = require("../models/specialization");

class specializationServices {
  async addSpecialization(data) {
    var specialization = new Specialization(data);
    await specialization.save();
    return specialization;
  }

  async getSpecializations() {
    return await Specialization.find({});
  }

  async getSpecialization(specializationId) {
    const specialization = await Specialization.find({
      _id: specializationId,
    });
    if (!specialization) throw new customError("Specialization not found");
    return specialization;
  }

  async deleteSpecialization(specializationId) {
    return await Specialization.findOneAndRemove({
      _id: specializationId,
    });
  }
}

module.exports = new specializationServices();
