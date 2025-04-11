const axios = require('axios')

// получить 10 репозиторией
async function fetchTrendingRepos() {
  try {
    const response = await axios.get(
      'https://api.github.com/search/repositories?q=stars:>1000&sort=stars&order=desc&per_page=10'
    );
    return response.data.items.map(repo => ({
      id: repo.id,
      name: repo.name,
      stars: repo.stargazers_count,
      url: repo.html_url,
    }));
  } catch (error) {
    console.error('Ошибка при запросе к GitHub:', error.message);
    return [];
  }
}

module.exports = { fetchTrendingRepos }
