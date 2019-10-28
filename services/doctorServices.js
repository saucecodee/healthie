const Doctor = require('../models/doctor');

class DoctorsService {
  async signupDoctor(data) {
    const doctor = new Doctor(data);
    await doctor.save();
  }

  async signinDoctor({ email, password }) {
    const user = await Doctor.findOne({ email });

    if (user.password != password) {
      //Throw custom error if password is invalid
      // throw new Error('Incorrect username or password');
    }
  }

  async getDoctor(_id) {
    const doctor = await Doctor.findOne({ _id });

    //Throw custom error if id is invalid

    return doctor;
  }

  async getDoctors() {
    const doctors = await Doctor.find({})

    return doctors;
  }

  async editDoctor(_id, data) {
    const doctor = await Doctor.findOneAndUpdate({ _id }, data, { new: true });

    return doctor
  }

  async deleteDoctor(_id) {
    const doctor = await Doctor.findOneAndRemove({ _id });

    return doctor
  }
}

module.exports = new DoctorsService();
