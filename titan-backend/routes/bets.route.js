var express = require('express')

var router = express.Router()

// Getting the Todo Controller that we just created

var BetsController = require('../controllers/bets.controller');

// Map each API to the Controller FUnctions

router.get('/', BetsController.getBets)

router.post('/', BetsController.createBet)

router.put('/', BetsController.updateBet)

router.delete('/:id', BetsController.removeBet)


// Export the Router

module.exports = router;