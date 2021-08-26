 const houseService = require('../service/house-service');
 const errorCodes = require('../constant/errorCodes');
 
 module.exports = {
     getAllHouses: async(req, res) => {
         try {
            const houses = await houseService.findHouses();
            res.json(houses);
         } catch (error) {
             res.status(errorCodes.BAD_REQUEST).json(error.message);
         }
     },

     getOneHouse: async(req, res) => {
        try {
           const {id} = req.params;
           const house = await houseService.findHouseById(id);
          
           console.log(house);
        
           res.json(house);
        } catch (error) {
            res.status(errorCodes.BAD_REQUEST).json(error.message);
        }
    },
    
    //  createHouse: (req, res) => {
    //      try {
    //         // houseService.createHouse(req.body);
    //         House.create({
    //             id: 1,
    //             urlHouse: 'https://st.depositphotos.com/1029202/2552/i/600/depositphotos_25521405-stock-photo-american-home.jpg',
    //             price: '$1,615',
    //             beds: 3,
    //             baths: 3,
    //             square: 1950,
    //             address: '8411 Red Cypress, Charlotte NC',
    //             ZIPcode: 28216
    //         })
    //         res.status(201).json('House created!');
    //      } catch (error) {
    //          error.status(errorCodes.BAD_REQUEST).json(error.message)
    //      }
    //  }
 }