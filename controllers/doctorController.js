const {
  signupDoctor,
  signinDoctor,
  getDoctor,
  getDoctors,
  editDoctor,
  deleteDoctor,
} = require('../services/doctorServices');
const { response } = require('../helpers/messages');

class DoctorContoller {
  async signupDoctor(req, res, next) {
    await signupDoctor(req.body);
    res.status(201).send(response('Account created.'));
  }

  async signinDoctor(req, res, next) {
    const doctor = await signinDoctor(req.body);
    res.status(200).send(response('Signin successful.', doctor));
  }

  async getDoctor(req, res, next) {
    let data = await getDoctor(req.params.doctorId);
    res.status(200).send(response('Found', data));
  }

  async getDoctors(req, res, next) {
    let data = await getDoctors();
    res.status(200).send(response('All Doctors', data));
  }

  async editDoctor(req, res, next) {
    let data = await editDoctor(req.params.doctorId, req.body);
    res.status(200).send(response('Doctor edited', data));
  }

  async deleteDoctor(req, res, next) {
    let data = await deleteDoctor(req.params.doctorId);
    res.status(200).send(response('Doctor deleted', data));
  }
}

module.exports = new DoctorContoller();
