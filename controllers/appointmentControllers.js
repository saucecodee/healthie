const { bookAppointment, getAppointments, getOneAppointment, cancelAppointment, approveAppointment, acceptAppointment } = require('../services/appointmentServices')
const { response } = require('../helpers/messages')

class AppointmentContoller {

    async bookAppointment(req, res, next) {
        const appointment = await bookAppointment(req.body)
        res.status(201).send(response("Appointment booked successfully", appointment))
    }

    async getAppointments(req, res, next) {
        const appointments = await getAppointments()
        res.status(200).send(response('', appointments))
    }

    async getOneAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        const appointment = await getOneAppointment(appointemntId)
        res.status(200).send(response('', appointment))
    }

    async cancelAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        const appointment = await cancelAppointment(appointemntId)
        res.status(200).send(response("Appointment canceled", appointment))
    }

    async approveAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        const appointment = await approveAppointment(appointemntId)
        res.status(200).send(response("Appointment approved", appointment))
    }

    async acceptAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        const appointment = await acceptAppointment(appointemntId)
        res.status(200).send(response("Appointment approved", appointment))
    }
}

module.exports = new AppointmentContoller()