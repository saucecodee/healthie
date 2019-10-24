const { bookAppointment, getAppointments, getOneAppointment, cancelAppointment, approveAppointment, acceptAppointment } = require('../services/appointmentServices')
const { response } = require('../config/messages')

class AppointmentContoller {

    async bookAppointment(req, res, next) {
        try {
            const appointment = await bookAppointment(req.body)
            res.status(201).send(response("Appointment booked successfully", appointment))
        } catch (error) {
            next(error)
        }
    }

    async getAppointments(req, res, next) {
        try {
            const appointments = await getAppointments()
            res.status(200).send(response('', appointments))
        } catch (error) {
            next(error)
        }
    }

    async getOneAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        try {
            const appointment = await getOneAppointment(appointemntId)
            res.status(200).send(response('', appointment))
        } catch (error) {
            next(error)
        }
    }

    async cancelAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        try {
            const appointment = await cancelAppointment(appointemntId)
            res.status(200).send(response("Appointment canceled", appointment))
        } catch (error) {
            next(error)
        }
    }

    async approveAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        try {
            const appointment = await approveAppointment(appointemntId)
            res.status(200).send(response("Appointment approved", appointment))
        } catch (error) {
            next(error)
        }
    }

    async acceptAppointment(req, res, next) {
        const appointemntId = req.params.appointemntId;
        try {
            const appointment = await acceptAppointment(appointemntId)
            res.status(200).send(response("Appointment approved", appointment))
        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AppointmentContoller()