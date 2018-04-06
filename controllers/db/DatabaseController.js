const Controller    = require('../Controller')
const dotenv        = require('dotenv').config()
const mongoose      = require('mongoose')
const UserModel     = require('../../models/UserModel')

class DatabaseController extends Controller {
    constructor() {
        super()
        // Store database credentials
        this.DB_NAME     = process.env.DB_NAME
        this.DB_HOST     = process.env.DB_HOST
        this.DB_USER     = process.env.DB_USER
        this.DB_PASSWORD = process.env.DB_PASSWORD
        this.DB_URI      = `mongodb://${this.DB_USER}:${this.DB_PASSWORD}@${this.DB_HOST}/${this.DB_NAME}`
    }

    /** 
     * Connects to database
     */
    connect() {
        // Try connecting to database
        try {
            mongoose.connect(this.DB_URI)
            const db = mongoose.connection
            db.on('error', console.error.bind(console, 'connection error:'))
            db.once('open', () => console.log('[SERVER] Database Connection succesful!'))

        // Catch connection errors
        } catch (error) {
            return console.error(error)
        }
    }

    addNewUser(credentials, callback) {
        UserModel.createUser(credentials, callback)
    }

    validateUser(credentials, callback) {
        UserModel.authenticateUser(credentials, callback)
    }
}

module.exports = DatabaseController