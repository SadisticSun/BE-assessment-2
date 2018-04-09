const Controller = require('../Controller')
const DB         = require('../db/DatabaseController')
class RouteController extends Controller {

    constructor() {
        super()
    }

    /** Processes the view request
     * @param {string} view
     * @param {object} req
     * @param {object} res
     * @param {object} data (optional)
     */

    process(view, req, res, data) {
        this.assertNotNull(view)
        this.assertNotNull(res)
        this.assertNotNull(req)
        this.view = view
        this.params = req.params
        this.request = req
        this.response = res
        this.payload = {
            payload: data || null,
            loggedIn: false
        }
        this.verifySession()
    }

    /**
     * Check if a user is logged in before rendering a view
     */
    verifySession() {
        if (!this.request.session.user) {
            if (this.view === 'login' || this.view === 'register') {
                return this.renderView()
            } else {
                return this.response.redirect('/login', 401, {
                    data: this.payload
                })
            }
        } else {
            this.payload.loggedIn = true
            return this.renderView()
        }
    }

    /**
     * Render view with optional data
     */
    renderView() {
        return this.response.render(this.view, {
            data: this.payload
        })
    }
    
    /** Sets 404 status and renders 404 page
     * @param {object} res
     */
    notFound(res) {
        return res.status(404).render('404', {
            data: this.payload
        })
    }
}

module.exports = RouteController