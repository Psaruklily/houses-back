const {Schema, model} = require('mongoose');

const houseSchema = new Schema({
    id: {type: Number},
    urlHouse: {type: String},
    price: {type: String}, 
    beds: {type: Number},
    baths: {type: Number},
    square: {type: Number},
    address: {type: String},
    ZIPcode: {type: Number},
    details: {type: Schema.Types.ObjectId, ref: 'HouseDetail'}
});

module.exports = model('House', houseSchema);