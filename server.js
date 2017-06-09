const verifyApi = require('./verify_api')
const userApi = require('./user_api')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(function(err, req, res, next){
	console.log(err)
	next(err)
})

router.get('/api/v1/authenticate/:phone_number', function(req, res, next){
  verifyApi.verifyRequest(req.params.phone_number)
    .catch(error => console.log(error) || res.status(500).send(error))
    .then(response => res.json(response.data))
})

router.post('/api/v1/authenticate/verify', function(req, res, next){
  verifyApi.verifyCheck(req.body)
    .catch(error => console.log(error) || res.status(500).send(error))
    .then(response => res.json(response.data))
})

router.get('/api/v1/login', function (requ, res, next) {
	userApi.loginRequest(req.body)
		.catch(error => console.log(error) || res.status(500).send(error))
    	.then(response => res.json(response.data))
})

router.post('/api/v1/register', function (requ, res, next) {
	userApi.registrationRequest(req.body)
		.catch(error => console.log(error) || res.status(500).send(error))	
    	.then(response => res.json(response.data))
})
app.use('/', router)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})