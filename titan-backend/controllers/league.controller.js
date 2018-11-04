// Accessing the Service that we just created

var LeagueService = require('../services/league.service')

// Async Controller function to get the To do List

exports.getLeagues = async function(req, res, next){

    // Check the existence of the query parameters, If the exists doesn't exists assign a default value
    
    var page = req.query.page ? req.query.page : 1
    var limit = req.query.limit ? req.query.limit : 10; 

    try{
    
        var leagues = await LeagueService.getLeagues({}, page, limit)
        
        // Return the betss list with the appropriate HTTP Status Code and Message.
        
        return res.status(200).json({status: 200, data: leagues, message: "Succesfully leagues Recieved"});
        
    }catch(e){
        
        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: e.message});
        
    }
}

exports.createLeague = async function(req, res, next){

    // Req.Body contains the form submit values.
    var league = {
        name: req.body.name,
    }

    try{
        
        // Calling the Service function with the new object from the Request Body
        
        var createdLeague = await LeagueService.createLeague(league)
        return res.status(201).json({status: 201, data: createdLeague, message: "Succesfully Created league"})
    }catch(e){
        console.log(e, ' e')

        //Return an Error Response Message with Code and the Error Message.
        
        return res.status(400).json({status: 400, message: "League Creation was Unsuccesfull"})
    }
}
