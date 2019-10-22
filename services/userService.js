const User = require('../models/user');
const { response } = require('../config/messages')

class UsersService {
    async addUser(data) {
        const user = new User(user)
        
        await user.save()

        if (!users) return response(404, "Users not found")

        return response(200, "User added successfully", users)
    }

    async getUsers() {
        const users = await User
            .find({})
            .select()

        if (!users) return response(404, "Users not found")

        return response(200, "", users)
    }

    async editUser(id) {
        const user = await User.findByIdAndUpdate({ _id: id })

        if (!user) return response(404, "User not found")

        return response(200, "", users)
    }
}

module.exports = new UsersService()