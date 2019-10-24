const {
  signupUser,
  signinUser,
  getUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../services/userServices");

const { response } = require("../config/messages");

class UserContoller {
  async signupUser(req, res, next) {
    try {
      await signupUser(req.body);
      res.status(201).send(response("Account created"));
    } catch (error) {
      next(error);
    }
  }

  async signinUser(req, res, next) {
    try {
      await signinUser(req.body);
      res.status(200).send(response("User signed in"));
    } catch (error) {
      next(error);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await getUsers();
      res.status(200).send(response("All users", users));
    } catch (error) {
      next(error);
    }
  }

  async getUser(req, res, next) {
    try {
      const user = await getUser(req.params.userId);
      res.status(200).send(response("User detail", user));
    } catch (error) {
      next(error);
    }
  }

  async editUser(req, res, next) {
    try {
      const user = await editUser(req.params.userId, req.body);
      res.status(200).send(response("Profile edited", user));
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    try {
      const user = await deleteUser(req.params.userId);
      res.status(200).send(response("User deleted", user));
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserContoller();
