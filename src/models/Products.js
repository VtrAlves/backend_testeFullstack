module.exports = (Sequelize, dataType) => {
	return Sequelize.define('Products', {
		idUserChanged: {
			allowNull: false,
			type: Sequelize.INTEGER,
		},
		name: {
			allowNull: false,
			type: Sequelize.STRING
		},
		description: {
			allowNull: true,
			type: Sequelize.TEXT
		},
		rating: {
			allowNull: true,
			type: Sequelize.INTEGER
		},
		image: {
			allowNull: true,
			type: Sequelize.STRING
		},
	})
}