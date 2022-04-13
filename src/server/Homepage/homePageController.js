const axios = require('axios');

const getHomepageData = () => {
    return axios.get('https://swapi.dev/api/')
    .then(response => response.data)
}

module.exports = {
    getHomepageData
}