const errorCodes = require('../constant/errorCodes');
const errorMessages = require('../error/error-messages');

module.exports = {
    checkIsIdValid: (req, res, next) => {
        try {
            const id = +req.params.id;

            if(id < 0 || !Number.isInteger(id) || Number.isNaN(id)) {
                throw new Error(errorMessages.NOT_VALID_ID['ua']);
            }
             
            next();
        } catch (error) {
            res.status(errorCodes.BAD_REQUEST).json(error.message);
        }
        
    }
}