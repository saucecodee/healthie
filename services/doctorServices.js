const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
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
    const token = await jwt.sign({ id: doctor._id, role: "doctor" }, "healthie");
    await doctor.save();
    return { token, doctor };
  }

  async signinDoctor({ email, password }) {
    if (!email) throw new CustomError("No email specified");
    if (!password) throw new CustomError("No password");

    const doctor = await Doctor.findOne({ email });

    if (!doctor) throw new CustomError("Incorrect email");

    const isCorrect = await bcrypt.compare(data.password, doctor.password)

    if (!isCorrect) throw new CustomError("Incorrect email or password");

    const token = await jwt.sign({ id: doctor._id, role: "doctor" }, "healthie");

    return { token, doctor };
  }

  async getDoctor(_id) {
    const doctor = await Doctor.findOne({ _id });

    //Throw custom error if id is invalid
    if (!doctor) throw CustomError("Doctor not found", 404);

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

  async getDoctorAppointments(doctorId) {
    const doctor = await Doctor.findOne({ _id: doctorId }).populate("appointments");

    let appointments = doctor.appointments;

    for (let i = 0; i < appointments.length; i++) {
      appointments[i].user = await User.findOne({ _id: appointments[i].user })
    }
    return appointments;
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
