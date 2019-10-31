const router = require("express").Router();
const {
  addSpecialization,
  getSpecializations,
  getSpecialization,
  deleteSpecialization,
} = require("../controllers/specializationController");

module.exports = function() {
  router.post("/", addSpecialization);
  router.get("/", getSpecializations);
  router.get("/:specializationId", getSpecialization);
  router.delete("/:specializationId", deleteSpecialization);
  return router;
};
