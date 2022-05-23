const {CustomApiError} = require('../errors/customError');

module.exports =  (err, req, res, next) => {
    if(err instanceof CustomApiError){
        res.status(err.status).json({msg : err.message});
    }else {
        res.json(500).json({msg: 'Something went wrong !'})
    }
   
}