const router = require("express").Router();
const userRoutes = require("./userRoutes");

module.exports = function(app) {
  app.use("/user", userRoutes());
  return router;
};
