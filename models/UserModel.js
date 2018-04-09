const mongoose = require('mongoose')
const argon = require('argon2')
const userSchema = mongoose.Schema({
    first_name: String,
    last_name: String,
    user_name: String,
    password: String
})

const User = mongoose.model('User', userSchema)

/** Hash a password string
 * @param {string} password // User password
 */
async function encryptPassword(password) {
    try {
        const hash = await argon.hash(password)
        return hash
    } catch (err) {
        console.error(err)
    }
}

/** Dehashes and compares a password
 * @param {string} hash // Hashed password string
 * @param {string} password // Non-hashed password string
 */
async function verifyPassword(hash, password) {
    try {
        const passwordVerified = await argon.verify(hash, password)
        return passwordVerified
    } catch (err) {
        console.error(err)
    }
}

/** Create a new user in Database
 * @param {object} credentials // Form field data
 * @param {function} callback // Callback
 */
module.exports.createUser = async (credentials, callback) => {
    if (!credentials)
        return console.error('ERROR: No credentials specified for new user')

    const user = new User({
        first_name: credentials.first_name,
        last_name: credentials.last_name,
        user_name: credentials.user_name,
        password: await encryptPassword(credentials.password)
    })

    user.save((err, user) => {
        if (err) {
            console.error(err)
        } else {
            console.log(`[SERVER] User ${user.user_name} saved succesfully`)
            callback()
        }
    })
}

/** Queries database for user and validates username and password
 * @param  {object} credentials // Login form field data
 * @param  {function} callback // Callback
 */
module.exports.authenticateUser = async (credentials, callback) => {
    if (!credentials)
        return console.error('ERROR: No valid login information provided')

    User.findOne({
        user_name: credentials.user_name
    }, 'user_name password', async (err, user) => {
        if (err) {
            console.error(err)
        } else if (user === null) {
            console.log('[SERVER] User not found')
            callback({
                error: {
                    message: 'Gebruiker niet gevonden'
                }
            })
        } else {
            const unhashedPassword = credentials.password
            const hashedPassword = user.password
            const verified = await verifyPassword(hashedPassword, unhashedPassword)
            if (verified) {
                callback(null, user)
            } else {
                console.log('[SERVER] Password incorrect')
                callback({
                    error: {
                        message: 'Wachtwoord komt niet overeen'
                    }
                })
            }
        }
    })
}