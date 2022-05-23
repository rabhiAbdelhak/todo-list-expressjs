

module.exports = asyncWrapper = (fun) => {
      return async (req, res, next) => {
          try{
             fun(req, res, next)
          }catch(err){
             next(err)
          }
      }
}