const { Sequelize } = require('sequelize')

const db = new Sequelize('github-api-testing', 'postgres', 'postgres', {
	host: 'localhost',
	dialect: 'postgres',
})

module.exports = db
