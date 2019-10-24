const Appointment = require('../models/appointment');
const { NotFound } = require('../config/errors')

class AppointmentService {
     constructor(){
          this.updateAppointment = this.updateAppointment.bind(this)
          this.cancelAppointment = this.cancelAppointment.bind(this)
          this.approveAppointment = this.approveAppointment.bind(this)
          this.acceptAppointment = this.acceptAppointment.bind(this)
     }

     async bookAppointment(data) {
          const appointment = new Appointment(data)

          await appointment.save()

          return appointment
     }

     async getAppointments() {
          const appointments = await Appointment.find({})

          if (!appointments) return null

          return appointments
     }

     async getOneAppointment(appointemntId) {
          const appointment = await Appointment.findById({ _id: appointemntId })

          if (!appointment) return null

          return appointment
     }

     async updateAppointment (appointemntId, data) {
          const appointment = await Appointment.findOneAndUpdate(
               { _id: appointemntId },
               data,
               { new: true })

          if (!appointment) throw new NotFound("Appointment not found")

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

module.exports = new AppointmentService()