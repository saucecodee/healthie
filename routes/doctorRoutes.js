const router = require('express').Router();
const {
  signupDoctor,
  signinDoctor,
  getDoctors,
  getDoctor,
  getDoctorAppointments,
  editDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');
const { isDoctor } = require('../middlewares/auth')

module.exports = function () {
  router.post('/signup', signupDoctor);
  router.post('/signin', signinDoctor);
  router.get('/', getDoctors);
  router.get('/:doctorId', getDoctor);
  router.get("/:doctorId/appointments", getDoctorAppointments)
  router.put('/:doctorId', isDoctor, editDoctor);
  router.delete('/:doctorId', isDoctor, deleteDoctor);

  return router;
};
