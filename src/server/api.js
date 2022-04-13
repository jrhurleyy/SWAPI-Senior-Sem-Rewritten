const express = require('express')
const api = express.Router();

const homepage = require('./Homepage').api

api.use('/', homepage)

module.exports = api;