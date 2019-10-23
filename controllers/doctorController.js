const {
  signupDoctor,
  signinDoctor,
  getDoctor,
  getDoctors,
  editDoctor,
  deleteDoctor,
} = require('../services/doctorServices.js/index.js');
const { response } = require('../config/messages');

class DoctorContoller {
  async signupDoctor(req, res, next) {
    try {
      await signupDoctor(req.body);
      res.status(201).send(response('Account created.'));
    } catch (error) {
      next(error);
    }
  }

  async signinDoctor(req, res, next) {
    try {
      await signinDoctor(req.body);
      res.status(200).send(response('Signin successful.'));
    } catch (error) {
      next(error);
    }
  }

  async getDoctor(req, res, next) {
    try {
      let data = await getDoctor(req.params.doctorId);
      res.status(200).send(response('Found', data));
    } catch (error) {
      next(error);
    }
  }

  async getDoctors(req, res, next) {
    try {
      let data = await getDoctors();
      res.status(200).send(response('Found', data));
    } catch (error) {
      next(error);
    }
  }

  async editDoctor(req, res, next) {
    try {
      let data = await editDoctor(req.params.doctorId, data);
      res.status(200).send(response('Doctor edited', data));
    } catch (error) {
      next(error);
    }
  }

  async deleteDoctor(req, res, next) {
    try {
      let data = await deleteDoctor(req.params.doctorId);
      res.status(200).send(response('Doctor deleted', data));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new DoctorContoller();
