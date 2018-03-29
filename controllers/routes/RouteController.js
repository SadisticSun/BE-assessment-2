const Controller = require('../Controller')

class RouteController extends Controller {
    constructor(path, data, res) {
        super()
        this.assertNotNull(path)
    }

    renderView(view, res) {
        return res.render(view)
    } 
}

module.exports = RouteController