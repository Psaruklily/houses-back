const House = require('../database/models/House');
const HouseDetail = require('../database/models/HouseDetails');
const mongoose = require('mongoose');

module.exports = {
    findHouses: () => House.find(),

    findHouseById: (id) => {
        return House.findById(id).populate('details').exec();
    }

}