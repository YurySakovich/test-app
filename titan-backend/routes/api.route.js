var express = require('express')

var router = express.Router()
var bets = require('./bets.route')


router.use('/bets', bets);


module.exports = router;