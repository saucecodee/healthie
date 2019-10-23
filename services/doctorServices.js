const Doctor = require('../models/doctors');
const { response } = require('../config/messages');

class DoctorsService {
  async signupDoctor(data) {
    const doctor = new Doctor(data);
    await doctor.save();
  }

  async signupDoctor({ email, password }) {
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
    return (await Doctor.find({})).map(doctor => doctor.toObject);
  }

  async editDoctor(_id, data) {
    return await Doctor.findOneAndUpdate({ _id }, data);
  }

  async deleteDoctor(_id) {
    return await Doctor.findOneAndRemove({ _id });
  }
}

module.exports = new DoctorsService();
