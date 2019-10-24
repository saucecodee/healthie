const User = require("../models/user");

class UsersService {
  async signupUser(data) {
    const user = new User(data);
    await user.save();
  }

  async signinUser(data) {
    const user = await User.findOne({ email: data.email });
    if (data.password == user.password) {
      //generate token
    } else {
      throw new Error("incorrect password");
    }
  }

  async getUsers() {
    return await User.find({});
  }

  async getUser(userId) {
    const user = await User.findOne({ _id: userId });

    return user
  }

  async editUser(userId, data) {
    return await User.findByIdAndUpdate({ _id: userId }, data, { new: true });
  }

  async deleteUser(userId) {
    return await User.findOneAndRemove({ _id: userId })
  }
}
module.exports = new UsersService();
