const {
  addSpecialization,
  getSpecializations,
  getSpecialization,
  deleteSpecialization,
} = require("../services/specializationServices");

const { response } = require("../helpers/messages");

class SpecializationController {
  async addSpecialization(req, res, next) {
    const specialization = await addSpecialization(req.body);
    res
      .status(201)
      .send(response("Specialization added succesfully", specialization));
  }

  async getSpecializations(req, res, next) {
    const specializations = await getSpecializations();
    res.status(200).send(response("", specializations));
  }

  async getSpecialization(req, res, next) {
    const specializationId = req.params.specializationId;
    const specialization = await getSpecialization(specializationId);
    res.status(200).send(response("", specialization));
  }

  async deleteSpecialization(req, res, next) {
    const specializationId = req.params.specializationId;
    const specialization = await deleteSpecialization(specializationId);
    res.send(200).send(reponse("Specialization deleted", specialization));
  }
}

module.exports = new SpecializationController();
