const House = require('../database/models/House');

module.exports = {
    findHouses: () => House.find(),

    findHouseById: (id) => House.findById(id),
}