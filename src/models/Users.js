module.exports = (Sequelize, dataType) => {
	return Sequelize.define('Users', {
		email: {
			type: dataType.STRING,
			allowNull: false
		},
		password: {
			type: dataType.STRING,
			allowNull: false
		},
		name: {
			type: dataType.STRING,
			allowNull: false
		}
	})
}