const mongoose = require('mongoose')
const guitarSchema = mongoose.Schema({
    image: Object,
    model: String,
    brand: String,
    body: {
        body_type: String,
        wood: String
    },
    neck: {
        neck_type: String,
        wood: String
    },
    fretboard: {
        fretboard_type: String,
        wood: String
    },
    pickup_type: String,
    string_amount: Number,
    fret_amount: Number,
    bridge_type: String
})

const Guitar = mongoose.model('Guitar', guitarSchema)

/** Add a guitar document to database
 * @param {object} fields // Form values
 * @param {object} files // Optional image files
 * @param {function} callback // Callback
 */
module.exports.addGuitar = (fields, files, callback) => {

    const guitar = new Guitar({
        image: files.image[0] || null,
        model: fields.model,
        brand: fields.brand,
        body: {
            body_type: fields.body_type,
            wood: fields.body_wood
        },
        neck: {
            neck_type: fields.neck_type,
            wood: fields.neck_wood
        },
        fretboard: {
            fretboard_type: fields.fretboard_type,
            wood: fields.fretboard_wood
        },
        pickup_type: fields.pickup_type,
        string_amount: parseInt(fields.string_amount, 10),
        fret_amount: parseInt(fields.fret_amount, 10),
        bridge_type: fields.bridge_type,
    })

    guitar.save((err, guitar) => {
        if (err) {
            console.error(err)
        } else {
            console.log(`[SERVER] New Guitar ${guitar.model} added to database`)
            callback()
        }
    })
}

/** Update guitar document in database
 * @param {string} id // Document ID
 * @param {object} fields // Form values
 * @param {object} files // Optional image files
 * @param {function} callback // Callback
 */
module.exports.updateGuitar = (id, fields, files, callback) => {
    Guitar.findById(id, (err, document) => {
        if (files.image) {
            document.set({
                image: files.image[0]
            })
        }
        document.set({
            model: fields.model,
            brand: fields.brand,
            body: {
                body_type: fields.body_type,
                wood: fields.body_wood
            },
            neck: {
                neck_type: fields.neck_type,
                wood: fields.neck_wood
            },
            fretboard: {
                fretboard_type: fields.fretboard_type,
                wood: fields.fretboard_wood
            },
            pickup_type: fields.pickup_type,
            string_amount: parseInt(fields.string_amount, 10),
            fret_amount: parseInt(fields.fret_amount, 10),
            bridge_type: fields.bridge_type,
        })

        document.save((err, guitar) => {
            if (err) {
                console.error(err)
            } else {
                console.log(`[SERVER] Guitar: ${guitar.model} updated`)
                callback()
            }
        })
    })
}

/** Get a single document
 * @param {string} id // Document ID
 * @param {function} callback // Callback
 */
module.exports.getGuitarById = (id, callback) => {
    Guitar.findById(id, callback)
}

/** Get all documents
 * @param {function} callback // Callback
 */
module.exports.getAllGuitars = (callback) => {
    Guitar.find((callback))
};