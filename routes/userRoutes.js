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
  router.get("/", getUsers);
  router.get("/:userId", getUser);
  router.put("/:userId", editUser);
  router.delete("/:userId", deleteUser);
  
  return router;
};
