<<<<<<< HEAD:middleware/auth.js
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const Doctor = require("../models/doctor");
const { NotFound, BadRequest, Unauthorized } = require("../config/errors");
=======
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Doctor = require('../models/doctor');
const CustomError = require('../helpers/CustomError')
>>>>>>> b4792a43b4bfdbc1205e49d328e348407d150f52:middlewares/auth.js

async function isDoctor(req, res, next) {
  const decoded = await jwt.verify(req.header.token, "healthie");

  const doctor = await Doctor.findOne({ _id: decoded.id });

<<<<<<< HEAD:middleware/auth.js
  if (!doctor) throw new NotFound("Doctor dosen't exist");

  if (doctor.role == "doctor") {
    req.headers.doctor = decoded;
    next();
  } else {
    throw new Unauthorized("Unauthorized user");
  }
=======
     if (!doctor) throw new CustomError("Doctor dosen't exist")

     if (doctor.role == "doctor") {
          req.headers.doctor = decoded;
          next()
     } else {
          throw new CustomError("Unauthorized user", 401)
     }
>>>>>>> b4792a43b4bfdbc1205e49d328e348407d150f52:middlewares/auth.js
}

async function isUser(req, res, next) {
  const decoded = await jwt.verify(req.headers.authtoken, "healthie");

  const user = await User.findOne({ _id: decoded.id });

<<<<<<< HEAD:middleware/auth.js
  if (!user) throw new NotFound("User dosen't exist");

  if (decoded.role == "user") {
    req.headers.user = decoded;
    next();
  } else {
    throw new Unauthorized("Unauthorized user");
  }
=======
     if (!user) throw new CustomError("User dosen't exist")

     if (decoded.role == "user") {
          req.headers.user = decoded
          next()
     } else {
          throw new CustomError("Unauthorized user", 401)
     }
>>>>>>> b4792a43b4bfdbc1205e49d328e348407d150f52:middlewares/auth.js
}

module.exports.isDoctor = isDoctor;
module.exports.isUser = isUser;
