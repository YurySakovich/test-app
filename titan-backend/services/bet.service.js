// Gettign the Newly created Mongoose Model we just created 

var BetModel = require('../models/bet.model')

// Saving the context of this module inside the _the variable
// _this = this

// Async function to get the To do List

exports.getBets = async function(query, page, limit){

    // Options setup for the mongoose paginate

    var options = {
        page,
        limit
    }
    
    // Try Catch the awaited promise to handle the error 
    
    try {
        var bets = await BetModel.paginate(query, options)
        
        // Return the todod list that was retured by the mongoose promise

        return bets;

    } catch (e) {

        // return a Error message describing the reason 

        throw Error('Error while Paginating Todos')
    }
}

exports.createBet = async function(bet){
    
    // Creating a new Mongoose Object by using the new keyword
    var newBet = new BetModel({
        name: bet.name,
        date: new Date(),
        status: bet.status,
        oraganizationName: bet.oraganizationName,
        betAmount: bet.betAmount,
        spec: bet.spec,
        kaf: bet.kaf,
        profit: bet.profit,
        liga: bet.liga,
        kindOfSport: bet.kindOfSport,
        currency: bet.currency,
        type: bet.type,
        subBets: bet.subBets
    })
    
    try{        
        var savedBet = await newBet.save();
        console.log(savedBet);
        return savedBet;
    }catch(e){
      
        // return a Error message describing the reason     

        throw Error("Error while Creating Todo")
    }
}

exports.updateBet = async function(bet){
    var id = bet.id

    try{
        //Find the old Todo Object by the Id
    
        var oldBet = await Bet.findById(id);
    }catch(e){
        throw Error("Error occured while Finding the Todo")
    }

    // If no old Todo Object exists return false

    if(!oldBet){
        return false;
    }

    console.log(oldBet)

    //Edit the Todo Object

    oldBet.status = bet.status
    oldBet.name = bet.name
    oldBet.oraganizationName = bet.oraganizationName
    oldBet.betAmount = bet.betAmount
    oldBet.spec = bet.body.spec,
    oldBet.kaf = bet.kaf,
    oldBet.profit = bet.profit,
    oldBet.liga = bet.liga,
    oldBet.kindOfSport = bet.kindOfSport,
    oldBet.currency = bet.currency
    oldBet.type = bet.type
    oldBet.subBets = bet.subBets

    console.log(oldBet)

    try{
        var savedTodo = await oldBet.save()
        return savedTodo;
    }catch(e){
        throw Error("And Error occured while updating the Todo");
    }
}

exports.deleteBet = async function(id){
    
    // Delete the Todo

    try{
        var deleted = await Bet.remove({_id: id})
        if(deleted.result.n === 0){
            throw Error("Todo Could not be deleted")
        }
        return deleted
    }catch(e){
        throw Error("Error Occured while Deleting the Todo")
    }
}