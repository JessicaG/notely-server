const axios = require('axios')

function verifyRequest(number) {
  const url = 'https://api.nexmo.com/verify/json'
  return axios.post(url,{
    api_key: 'bb40c8e2',
    api_secret: '2a8a664dcccd74f3',
    number,
    brand: 'Notely'
  })
}

function verifyCheck({request_id, code}) {
  const url = 'https://api.nexmo.com/verify/check/json'
  return axios.post(url, {
    api_key: 'bb40c8e2',
    api_secret: '2a8a664dcccd74f3',
    request_id,
    code
  })
}
module.exports = {verifyRequest, verifyCheck}
