const RESOURCE_PATH = '/engineers';
const apiController = {
  index(req, res, next){
    res.json(res.locals.data.engineers);
  },
  show(req, res, next){
    res.json(res.locals.data.engineer)
  },
  destroy(req, res, next){
    res.status(204).json({msg: 'engineer sucessfully deleted'})
   }
}

module.exports = apiController