var mongoose = require('mongoose')
var mongoosePaginate = require('mongoose-paginate')


var LeagueSchema = new mongoose.Schema({
    name: String,
})

LeagueSchema.plugin(mongoosePaginate)
const League = mongoose.model('League', LeagueSchema)

module.exports = League;