const Doctor = require("../models/doctor");
const CustomError = require("../helpers/CustomError");

class DoctorsService {
  async signupDoctor(data) {
    if (await Doctor.findOne({ email: data.email }))
      throw new CustomError("email already exists");
    if (await Doctor.findOne({ phone: data.phone }))
      throw new CustomError("phone number already exists");
    if (await Doctor.findOne({ licenceID: data.licenceID }))
      throw new CustomError("licence id already exists");
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

  async getDoctors({ q, c, page, limit }) {
    page = page || 1;
    limit = limit || 20;
    limit = limit > 100 ? 100 : limit;
    c = c || "name"
    q = q || "";

    limit = parseInt(limit);
    page = parseInt(page);

    const filter = {};
    filter[c] = { $regex: q, $options: 'i' };

    const doctors = await Doctor
      .find(filter)
      .skip(page * limit - limit)
      .limit(limit)

    return doctors;
  }

  async editDoctor(_id, data) {
    const doctor = await Doctor.findOneAndUpdate({ _id }, data, { new: true });

    return doctor;
  }

  async deleteDoctor(_id) {
    const doctor = await Doctor.findOneAndRemove({ _id });

    return doctor;
  }
}

module.exports = new DoctorsService();
