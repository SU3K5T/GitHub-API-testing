const express = require('express')

const app = express()
const apiRoutes = require('./routes/api')
const db = require('./db')

const { startSync } = require('./sync')

app.use('/api', apiRoutes)

db.sync({ force: false })
	.then(() => {
		console.log('Таблицы созданы/проверены')
		startSync()
	})
	.catch((err) => console.error('Ошибка синхронизации БД:', err))

const PORT = 3000
app.listen(PORT, () => {
	console.log('start')
})
