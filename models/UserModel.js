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
 * @param  {string} password
 */
async function encryptPassword(password) {
    try {
        const hash = await argon.hash(password)
        return hash
    } catch (err) {
        console.error(err)
    }
}

/** Dehashes the supplied hash and compares the result to the user input password
 * @param  {string} hash
 * @param  {string} password
 */
async function verifyPassword(hash, password, callback) {
    try {
        if (await argon.verify(hash, password)) {
            console.log('[SERVER] Password validated')
            return true
        } else {
            console.log('[SERVER] Password is not valid')
            return false
        }
    } catch (err) {
        console.error(err)
    }
}

/** Create a new user in Database, then call cb function if no errors
 * @param  {object} credentials
 * @param  {function} callback
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

module.exports.authenticateUser = async (credentials, callback) => {
    if (!credentials)
        return console.error('ERROR: No valid login information provided')
    
    User.findOne({ user_name: credentials.user_name }, 'user_name', (err, user) => {
        if (err) {
            console.error(err)
        } else {
            callback(user)
        }
    })
}