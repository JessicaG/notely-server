const axios = require('axios')
const nexmoApiKey = process.env.NEXMO_API_KEY
const nexmoApiSecretKey = process.env.NEXMO_API_SECRET_KEY

function verifyRequest(number) {
  const url = 'https://api.nexmo.com/verify/json'
  return axios.post(url,{
    api_key: nexmoApiKey,
    api_secret: nexmoApiSecretKey,
    number,
    brand: 'Notely'
  })
}

function verifyCheck({request_id, code}) {
  const url = 'https://api.nexmo.com/verify/check/json'
  return axios.post(url, {
    api_key: nexmoApiKey,
    api_secret: nexmoApiSecretKey,
    request_id,
    code
  })
}
module.exports = {verifyRequest, verifyCheck}
