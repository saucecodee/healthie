<<<<<<< HEAD
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const doctorRoutes = require('./doctorRoutes');

module.exports = function (app) {
    app.get('/test', (req, res)=> {
        res.send("yehh!")
    })
    app.use('/user', userRoutes())
    app.use('/doctors', doctorRoutes())
    return router;
}
=======
const router = require("express").Router();
const userRoutes = require("./userRoutes");

module.exports = function(app) {
  app.use("/user", userRoutes());
  return router;
};
>>>>>>> 052a00ff141d06eb862ad7803a3b1e84b8d5c2da
