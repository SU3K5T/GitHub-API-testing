const express = require('express')
const router = express.Router()
const Repository = require('../models/Repository')
const { forceSync } = require('../sync')
const { Sequelize } = require('sequelize')

// repo by id or name
router.get('/repos/:idOrName', async (req, res) => {
	const repo = await Repository.findOne({
		where: {
			[Sequelize.Op.or]: [
				{ id: req.params.idOrName },
				{ name: req.params.idOrName },
			],
		},
	})
	res.json(repo)
})

// allk respos
router.get('/repos', async (_, res) => {
	const repos = await Repository.findAll()
	res.json(repos)
})

// force sync
router.post('/sync', (_, res) => {
	forceSync()
	res.json({ message: 'Sync started!!!' })
})

module.exports = router
