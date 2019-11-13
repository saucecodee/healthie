const router = require("express").Router();
const {
  addSymptom,
  getSymptoms,
  getSymptom,
  deleteSymptom,
} = require("../controllers/symptomController");

module.exports = function() {
  router.post("/", addSymptom);
  router.get("/", getSymptoms);
  router.get("/:symptomId", getSymptom);
  router.delete("/:symptomId", deleteSymptom);
  return router;
};
