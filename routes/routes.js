'use strict';
module.exports = function(app) {
  var emailController = require('../controllers/email/emailController.js');
  
  app.route('/verifyemail/:email')
  .get(emailController.verify_email);

   };
