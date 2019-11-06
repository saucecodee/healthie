const router = require("express").Router();
const userRoutes = require("./userRoutes");
const doctorRoutes = require("./doctorRoutes");
const appointmentRoutes = require("./appointmentRoutes");
const specializationRoutes = require("./specializationRoutes");

module.exports = function(app) {
  router.get("/test", (req, res) => {
    res.send("yehh!");
  });
  router.use("/users", userRoutes());
  router.use("/doctors", doctorRoutes());
  router.use("/appointments", appointmentRoutes());
  router.use("/specialization", specializationRoutes());

  return router;
};
