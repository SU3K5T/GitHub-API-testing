const { Command } = require('commander')
const axios = require('axios')

const program = new Command()

program
	.command('get <idOrName>')
	.description('Get repo by id or name')
	.action(async (idOrName) => {
		const response = await axios.get(
			`http://localhost:3000/api/repos/${idOrName}`
		)
		console.log(response.data)
	})

program
	.command('list')
	.description('Get all repos')
	.action(async () => {
		const response = await axios.get('http://localhost:3000/api/repos')
		console.log(response.data)
	})

program
	.command('sync')
	.description('Start sync')
	.action(async () => {
		const response = await axios.post('http://localhost:3000/api/sync')
		console.log(response.data.message)
	})

program.parse(process.argv)
