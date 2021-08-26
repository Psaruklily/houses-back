const {Schema, model} = require('mongoose');

const HouseDetailSchema = new Schema({
    'house-description': {type: String},
    'home-details': {type: Object},
    'home-comes': {type: Array}
}, {collection: 'houseDetails'});

module.exports = model('HouseDetail', HouseDetailSchema);