const router = require("express").Router();
const {
  signupUser,
  signinUser,
  getUsers,
  getUser,
  deleteUser,
  editUser,
} = require("../controllers/userController");

module.exports = function() {
  router.post("/signup", signupUser);
  router.post("/signin", signinUser);
  router.get("/:userid,", getUser);
  router.get("/", getUsers);
  router.put("/:userid", editUser);
  router.delete("/:userid", deleteUser);
  return router;
};
