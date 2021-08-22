 const errorCodes = require('../constant/errorCodes');
 
 module.exports = {
     getAllHouses: (req, res) => {
         try {
            res.json('hello from controller');
         } catch (error) {
             res.status(errorCodes.BAD_REQUEST).json(error.message);
         }
         
     },

     getOneHouse: (req, res) => {
         try {
            res.json('One house');
         } catch (error) {
             res.status(errorCodes.BAD_REQUEST).json(error.message);
         }
         
     }
 }