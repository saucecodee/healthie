const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/user");
const { NotFound, Unauthorized } = require('../config/errors')

class UsersService {

  async signupUser(data) {
    data.password = await bcrypt.hash(data.password, 10)

    const user = new User(data);

    const token = await jwt.sign({ id: user._id, role: "user" }, 'healthie');

    await user.save();

    return token
  }

  async signinUser(data) {
    const user = await User.findOne({ email: data.email });

    if(!user) throw new Unauthorized("Incorrect email or password")

    const isCorrect = await bcrypt.compare(data.password, user.password)

    if(!isCorrect) throw new Unauthorized("Incorrect email or password")

    const token = await jwt.sign({ id: user._id, role: "user" }, 'healthie');

    return token 
  }

  async getUsers() {
    return await User.find({});
  }

  async getUser(userId) {
    const user = await User.findOne({ _id: userId });

    return user
  }

  async editUser(userId, data) {
    const user =  await User.findByIdAndUpdate({ _id: userId }, data, { new: true });

    if(!user) throw new NotFound("User dosen't exist")
    
    return user
  }

  async deleteUser(userId) {
    return await User.findOneAndRemove({ _id: userId })
  }
}
module.exports = new UsersService();
