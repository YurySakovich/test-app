var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var BetSchema = new mongoose.Schema({
    date: Date,
    name: String,
    oraganizationName: String,
    kindOfSport: String,
    liga: String,
    spec: String,
    kaf: Number,
    status: String,
    profit: Number,
    betAmount: Number,
    currency: String,
})

BetSchema.plugin(mongoosePaginate)
const Bet = mongoose.model('Bet', BetSchema)

module.exports = Bet;