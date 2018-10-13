var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var BetSchema = new mongoose.Schema({
    name: String,
    description: String,
    date: Date,
    status: String,
    oraganizationName: String,
    betAmount: Number,
    userId: String
})

BetSchema.plugin(mongoosePaginate)
const Bet = mongoose.model('Bet', BetSchema)

module.exports = Bet;