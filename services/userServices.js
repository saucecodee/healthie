const User = require("../models/user");
const { response } = require("../config/messages");

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

  async getUser(_id) {
    await User.findOne({ _id });
  }

  async editUser(_id, data) {
    return await User.findByIdAndUpdate({ _id }, data);
  }

    async deleteUser(_id) {
      return await User.findOneAndRemove({_id})
  }
}
module.exports = new UsersService();
