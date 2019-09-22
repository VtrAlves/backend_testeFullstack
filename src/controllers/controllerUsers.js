const {Users} = require('../models')

class ControllerUsers {
	async getAllUsers(params) {
		return await Users.findAll()
	}

	async createUser(json){
		return await Users.create(json)
	}
}

module.exports = ControllerUsers