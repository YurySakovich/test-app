// Gettign the Newly created Mongoose Model we just created 

var LeagueModel = require('../models/league.model')
var models = require('../models')
var mongoose = require('mongoose')

// Saving the context of this module inside the _the variable
// _this = this

// Async function to get the To do List

exports.getLeagues = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var leagues = await LeagueModel.paginate(query, options)
        // Return the todod list that was retured by the mongoose promise

        return leagues;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Todos')
    }
}

exports.createLeague = async function(league){
    
    // Creating a new Mongoose Object by using the new keyword
    var newLeague = new LeagueModel({
        name: league.name,
    })


    
    try{

        let db = mongoose.connection;

        return db.collections.leagues.findOne({
            name: league.name
        })
        .then(league => {
            if(!league) {
                newLeague.save();
            }
            return league;
        })

    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating League")
    }
}