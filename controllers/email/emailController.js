const { Server } = require("http");
const http = require("https");
const fetch = require('node-fetch');

module.exports.verify_email = async function(req, res) {
    const { validate } = require('deep-email-validator');
  
    // Validate the email
    const validationResult = await validate(req.params.email);
    res.send(validationResult);
    res.end();
  }