const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const DoctorSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "field name is required"],
    },
    phone: {
      type: String,
      required: [true, "phone is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    specialty: {
      type: String,
      required: [true, "field specialty is required"],
    },
    imgUrl: {
      type: String,
      default: '/uploads/defaultImg.png',
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
    licenceID: {
      type: String,
      required: [true, "licence id is required"],
    },
    bio: {
      type: String,
      default: null,
    },
    appointments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Appointment',
      }
    ]
  },
  {
    timestamps: true
  });

DoctorSchema.pre("save", async function (next) {
  try {
    const saltRounds = 10;
    let hash = await bcrypt.hash(this.password, saltRounds);
    this.password = hash;
  } catch (error) {
    next(err)
  }
  next();
});

module.exports = mongoose.model('Doctors', DoctorSchema);
