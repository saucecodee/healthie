const Appointment = require('../models/appointment');
const CustomError = require("../helpers/CustomError");
const Doctor = require("../models/doctor");
const User = require("../models/user");

class AppointmentService {
  constructor() {
    this.updateAppointment = this.updateAppointment.bind(this)
    this.cancelAppointment = this.cancelAppointment.bind(this)
    this.approveAppointment = this.approveAppointment.bind(this)
    this.acceptAppointment = this.acceptAppointment.bind(this)
  }

  async bookAppointment(data) {
    const appointment = new Appointment(data)

    let user = await User.findOne({ _id: data.user });
    if (!user) throw new CustomError("Invalid user id");

    let doctor = await Doctor.findOne({ _id: data.doctor });
    if (!doctor) throw new CustomError("Invalid doctor id");

    await appointment.save()

    //Adding appointment id to user's appointments array
    user.appointments.push(appointment._id);
    await User.findOneAndUpdate({ _id: user._id }, user);

    //Adding appointment id to doctor's appointments array
    doctor.appointments.push(appointment._id);
    await Doctor.findOneAndUpdate({ _id: doctor._id }, doctor);

    return appointment
  }

  async getAppointments() {
    const appointments = await Appointment.find({})

    return appointments
  }

  async getOneAppointment(appointemntId) {
    const appointment = await Appointment.findById({ _id: appointemntId })

    if (!appointment) throw new CustomError("Appointment not found", 404)

    return appointment
  }

  async updateAppointment(appointemntId, data) {
    const appointment = await Appointment.findOneAndUpdate(
      { _id: appointemntId },
      data,
      { new: true })

    if (!appointment) throw new CustomError("Appointment not found", 404)

    return appointment
  }

  async cancelAppointment(appointmentId) {
    return await this.updateAppointment(appointmentId, { status: 'canceled' })
  }

  async approveAppointment(appointmentId) {
    return await this.updateAppointment(appointmentId, { status: 'approved' })
  }

  async acceptAppointment(appointmentId) {
    return await this.updateAppointment(appointmentId, { status: 'accepted' })
  }
}

module.exports = new AppointmentService();
