const router = require('express').Router();
const { bookAppointment, getAppointments, getOneAppointment, cancelAppointment, approveAppointment, acceptAppointment } = require('../controllers/appointmentControllers');
const {isDoctor, isUser} = require('../middleware/auth')

module.exports = function () {
     router.post('/', isUser, bookAppointment);
     router.get('/', getAppointments);
     router.get('/:appointemntId', getOneAppointment);
     router.put('/:appointemntId/cancel', cancelAppointment);
     router.put('/:appointemntId/approve', approveAppointment);
     router.put('/:appointemntId/accept', acceptAppointment);

     return router;
}