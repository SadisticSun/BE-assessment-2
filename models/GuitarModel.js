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

module.exports.addGuitar = async (fields, files, callback) => {
  
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

module.exports.getGuitarById = (id, callback) => {
	Guitar.findById(id, callback)
}

module.exports.getAllGuitars = (callback) => {
	Guitar.find((callback))
};