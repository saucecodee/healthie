var {
  addSymptom,
  getSymptom,
  getSymptoms,
  deleteSymptom,
} = require("../services/symptomServices");

var { response } = require("../helpers/messages");

class symptomController {
  async addSymptom(req, res, next) {
    const symptom = await addSymptom(req.body);
    res.status(201).send(response("Symptom added successfully", symptom));
  }

  async getSymptom(req, res, next) {
    var symptomId = req.params.symptomId;
    const symptom = await getSymptom(symptomId);
    res.status(200).send(response("", symptom));
  }

  async getSymptoms(req, res, next) {
    let page = req.query.page;
    let limit = req.query.limit;
    const symptoms = await getSymptoms(page, limit);
    res.status(200).send(response("", symptoms));
  }

  async deleteSymptom(req, res, next) {
    var symptomId = req.params.symptomId;
    const symptom = await deleteSymptom(symptomId);
    res.status(200).send(response("Symptom deleted successfully", symptom));
  }
}

module.exports = new symptomController();
