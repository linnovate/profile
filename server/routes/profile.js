'use strict';

var profile = require('../controllers/profile.js');

/* jshint -W098 */
// The Package is past automatically as first parameter
module.exports = function(Profile, app, auth, database) {

// Get profile data
  app.get('/profile/get', auth.requiresAdmin, function(req, res, next) {


    var profileObject = profile.getProfile(req.user.email);
    res.send(req.user);
  });

};
