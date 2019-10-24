const router = require('express').Router();
const { bookAppointment, getAppointments, getOneAppointment, cancelAppointment, approveAppointment, acceptAppointment } = require('../controllers/appointmentControllers');

module.exports = function () {
     router.post('/', bookAppointment);
     router.get('/', getAppointments);
     router.get('/:appointemntId', getOneAppointment);
     router.put('/:appointemntId/cancel', cancelAppointment);
     router.put('/:appointemntId/approve', approveAppointment);
     router.put('/:appointemntId/accept', acceptAppointment);

     return router;
}