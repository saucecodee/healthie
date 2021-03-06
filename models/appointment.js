const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
     {
          doctor: {
               type: mongoose.Schema.Types.ObjectId,
               required: [true, "doctor's id is required"]
          },
          user: {
               type: mongoose.Schema.Types.ObjectId,
               required: [true, "user's id is required"]
          },
          duration: {
               type: Number,
               required: [true, "Duration is required"]
          },
          location: {
               type: String,
               required: [true, "Location is required"]
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