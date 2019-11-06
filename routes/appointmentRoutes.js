const router = require("express").Router();
const {
  bookAppointment,
  getAppointments,
  getOneAppointment,
  cancelAppointment,
  approveAppointment,
  acceptAppointment,
} = require("../controllers/appointmentControllers");
const { isDoctor, isUser } = require("../middlewares/auth");

module.exports = function() {
  router.post("/", isUser, bookAppointment);
  router.get("/", getAppointments);
  router.get("/:appointemntId", getOneAppointment);
  router.post("/:appointemntId/cancel", cancelAppointment);
  router.post("/:appointemntId/approve", approveAppointment);
  router.post("/:appointemntId/accept", acceptAppointment);

  return router;
};
