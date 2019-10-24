const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema({
     doctor: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
     },
     user: {
          type: mongoose.Schema.Types.ObjectId,
          required: true
     },
     dateCreated: {
          type: Date,
          default: Date.now(),
     },
     duration: {
          type: Number,
          required: true
     },
     location: {
          type: String,
          required: true
     },
     status: {
          type: String,
          enum: ['pending', 'approved', 'accepted', 'canceled'],
          default: 'pending',
          lowercase: true,
          trim: true,
     }

},
{
     timestamps: true
});

module.exports = mongoose.model('Appointment', AppointmentSchema);