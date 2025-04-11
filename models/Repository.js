const { DataTypes } = require('sequelize')
const db = require('../db')

const Repository = db.define('repository', {
	id: { type: DataTypes.INTEGER, primaryKey: true },
	name: DataTypes.STRING,
	stars: DataTypes.INTEGER,
	url: DataTypes.STRING,
})

module.exports = Repository
