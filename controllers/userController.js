const { getUsers, editUser } = require('../services/userService')
const { response } = require('../config/messages')

class UserContoller {
    getUsers(req, res) {
        getUsers(req.body)
            .then(result => {
                res.status(result.status).send(result)
            }).catch(error => {
                res.status(result.status).send(response(404, "Something went wrong", error))
            })
    }

    editUser(req, res) {
        editUser(req.body)
            .then(result => {
                res.status(result.status).send(result)
            }).catch(error => {
                res.status(result.status).send(response(404, "Something went wrong", error))
            })
    }
}

module.exports = new UserContoller()