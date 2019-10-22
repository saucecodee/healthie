const router = require('express').Router();
const { addUsers, getUsers, getUser, editUser } = require('../controllers/userController');

module.exports = function () {
    // router.post('/', addUser);
    // router.get('/:id', getUser);
    router.get('/', getUsers);
    // router.put('/:id', editUser);
    // router.delete('/:id', deleteUser);
    return router;
}