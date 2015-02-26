'use strict';

var gravatar = require('gravatar');

exports.getProfile = function(mail){

  var hardcodedProfile ={
    pic: getProfilePic(mail),
    hobby: 'jogging'
  }
  return hardcodedProfile;
}


var getProfilePic = exports.getProfilePic = function(mail){
  //return profile picture from schema;
  return getGravatar(mail);
};

var getGravatar = exports.getGravatar= function(mail, options, https){
  console.log(mail);
  //based on node-gravatar (did not want to introduce additional requirements)
  return gravatar.url(mail);
};
