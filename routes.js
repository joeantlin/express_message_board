//controller
const controller = require("./controller")

module.exports = app => {
    app.get('/', controller.index)
    app.post('/message', controller.message)
    app.post('/comment', controller.comment)
}