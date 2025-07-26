const axios = require('axios');

const axiosClient =  axios.create({
    baseURL: 'https://code-ace-backend1.onrender.com',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


module.exports = axiosClient;

