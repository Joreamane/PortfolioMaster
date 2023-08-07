const MainController = require('../controllers/main.controller')
module.exports = (app) => {
    app.get('/', MainController.index)
}