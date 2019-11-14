const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AppointmentSchema = new Schema(
     {
          doctor: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Doctors",
               required: [true, "doctor's id is required"]
          },
          user: {
               type: mongoose.Schema.Types.ObjectId,
               ref: "Users",
               required: [true, "user's id is required"]
          },
          duration: {
               type: Number
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
          },
          date: {
               type: Date,
          },
          symptoms: [
               {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Symptoms",
               },
          ]
     },
     {
          timestamps: true
     });

module.exports = mongoose.model('Appointment', AppointmentSchema);
