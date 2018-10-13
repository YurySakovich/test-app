// Accessing the Service that we just created

var BetService = require('../services/bet.service')

// Async Controller function to get the To do List

exports.getBets = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var bets = await BetService.getBets({}, page, limit)
        
        // Return the betss list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: bets, message: "Succesfully Bets Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createBet = async function(req, res, next){

    // Req.Body contains the form submit values.
    var bet = {
        name: req.body.name,
        description: req.body.description,
        date: new Date(),
        status: req.body.status,
        oraganizationName: req.body.oraganizationName,
        betAmount: req.body.betAmount,
        userId: req.body.userId
    }
    console.log(bet, ' bet createdBet')

    try{
        
        // Calling the Service function with the new object from the Request Body
        
        var createdBet = await BetService.createBet(bet)
        console.log(createdBet, ' createdBet')
        return res.status(201).json({status: 201, data: createdBet, message: "Succesfully Created Bet"})
    }catch(e){
        console.log(e, ' e')

        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "Bet Creation was Unsuccesfull"})
    }
}

exports.updateBet = async function(req, res, next){

    // Id is necessary for the update

    if(!req.body._id){
        return res.status(400).json({status: 400., message: "Id must be present"})
    }

    var id = req.body._id;

    var bet = {
        id,
        name: req.body.name ? req.body.name : null,
        description: req.body.description ? req.body.description : null,
        date: req.body.date ? req.body.date : null,
        status: req.body.status ? req.body.status : null,
        oraganizationName: req.body.oraganizationName ? req.body.oraganizationName : null,
        betAmount: req.body.betAmount ? req.body.betAmount : null,
        userId: req.body.userId ? req.body.userId : null
    }

    try{
        var updatedBet = await BetService.updateBet(bet)
        return res.status(200).json({status: 200, data: updatedBet, message: "Succesfully Updated Bet"})
    }catch(e){
        return res.status(400).json({status: 400., message: e.message})
    }
}

exports.removeBet = async function(req, res, next){

    var id = req.params.id;

    try{
        var deleted = await BetService.removeBet(id)
        return res.status(204).json({status:204, message: "Succesfully Bet Deleted"})
    }catch(e){
        return res.status(400).json({status: 400, message: e.message})
    }

}