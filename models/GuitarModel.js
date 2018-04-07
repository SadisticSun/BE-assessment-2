const mongoose = require('mongoose')
const guitarSchema = mongoose.Schema({
    model: String,
    brand: String,
    body: {
        type: String,
        wood: String
    },
    neck: {
        type: String,
        wood: String
    },
    fretboard: {
        type: String,
        wood: String
    },
    pickup_type: String,
    string_amount: Number,
    fret_amount: Number,
    bridge_type: String
})

const Guitar = mongoose.model('Guitar', guitarSchema)

module.exports.addGuitar = async (data, callback) => {
    console.log(typeof data.body_type)
    const guitar = new Guitar({
        model: data.model,
        brand: data.brand,
        body: {
            type: data.body_type,
            wood: data.body_wood
        },
        neck: {
            type: data.neck_type,
            wood: data.neck_wood
        },
        fretboard: {
            type: data.fretboard_type,
            wood: data.fretboard_wood
        },
        pickup_type: data.pickup_type,
        string_amount: parseInt(data.string_amount, 10),
        fret_amount: parseInt(data.fret_amount, 10),
        bridge_type: data.bridge_type
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
	Guitar.find(callback)
};