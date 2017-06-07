const axios = require('axios')

function loginRequest({email, password}) {
  if (!email || !password) {
    return res.json({success: false, msg: 'Please pass name and password.'});
  } else {
    var newUser = new User({
      name: req.body.name,
      password: req.body.password
    });
    // save the user
    newUser.save(function(err) {
      if (err) {
        return res.json({success: false, msg: 'Username already exists.'});
      }
      res.json({success: true, msg: 'Successful created new user.'});
    });
    const url = ''
  return response
  }

function registrationRequest({email, password}) {
  // create new user
}
module.exports = {loginRequest, registrationRequest}