const { fetchTrendingRepos } = require('./github')

const Repository = require('./models/Repository')

let syncInterval

async function syncWithGitHub() {
	const repos = await fetchTrendingRepos()
	await Repository.bulkCreate(repos, { updateOnDuplicate: ['stars'] })

	console.log('Синхронизация завершена!')
}

function startSync(intervalMinutes = 60) {
	syncInterval = setInterval(syncWithGitHub, intervalMinutes * 60 * 1000)
	syncWithGitHub() 
}

function forceSync() {
	clearInterval(syncInterval)
	startSync()
}

module.exports = { startSync, forceSync }
