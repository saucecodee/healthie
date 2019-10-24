const router = require('express').Router();
const {
  signupDoctor,
  signinDoctor,
  getDoctors,
  getDoctor,
  editDoctor,
  deleteDoctor,
} = require('../controllers/doctorController');

module.exports = function() {
  router.post('/signup', signupDoctor);
  router.post('/signin', signinDoctor);
  router.get('/', getDoctors);
  router.get('/:doctorId', getDoctor);
  router.put('/:doctorId', editDoctor);
  router.delete('/:doctorId', deleteDoctor);
  
  return router;
};
