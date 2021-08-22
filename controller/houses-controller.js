 const houseService = require('../service/house-service');
 const errorCodes = require('../constant/errorCodes');
 
 module.exports = {
     getAllHouses: (req, res) => {
         try {
            const houses = houseService.findHouses();
            res.json(houses);
         } catch (error) {
             res.status(errorCodes.BAD_REQUEST).json(error.message);
         }
         
     },

     getOneHouse: (req, res) => {
         try {
            const {id} = req.params;
            const house = houseService.findHouseById(id);
            res.json(house);
         } catch (error) {
             res.status(errorCodes.BAD_REQUEST).json(error.message);
         }
     },

     createHouse: (req, res) => {
         try {
            houseService.createHouse(req.body);
            res.status(201).json('User created!');
         } catch (error) {
             error.status(errorCodes.BAD_REQUEST).json(error.message)
         }
         
     }
 }