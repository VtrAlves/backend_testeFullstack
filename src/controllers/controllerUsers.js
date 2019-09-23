const { Users } = require('../models')

module.exports = {
	async getAllUsers(req,res) {
		let body = await Users.findAll()
		res.json({ body })
	},
	async getUser(req, res){
		let { id } = req.params
		let body = await Users.findAll({
			where: {
				id
			}
		})
		res.json({ body })
	},
	async createUser(req, res){
		let { body } = req

		let newUser = await Users.create(body)

		res.json(newUser)
	},
	async updateUser(req, res){
		let { body, params: { id } } = req

		let updatedUser = await Users.update(body, {
			where: { id }
		})

		res.json(updatedUser)
	},
	async deleteUser(req, res){
		let { id } = req.params

		let deletedUser = await Users.destroy({
			where: { id }
		})

		res.json(deletedUser)
	}
}