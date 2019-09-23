const { Products } = require('../models')

module.exports = {
	async getAllProducts(req,res) {
		let body = await Products.findAll()
		res.json({ body })
	},
	async getProduct(req, res){
		let { id } = req.params
		let body = await Products.findAll({
			where: {
				id
			}
		})
		res.json({ body })
	},
	async createProduct(req, res){
		let { body } = req

		let newProduct = await Products.create(body)

		res.json(newProduct)
	},
	async updateProduct(req, res){
		let { body, params: { id } } = req

		let updatedProduct = await Products.update(body, {
			where: { id }
		})

		res.json(updatedProduct)
	},
	async deleteProduct(req, res){
		let { id } = req.params

		let deletedProduct = await Products.destroy({
			where: { id }
		})

		res.json(deletedProduct)
	}
}