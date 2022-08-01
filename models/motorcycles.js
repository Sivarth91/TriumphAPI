const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const motorcyclesSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    years: {
        type: String,
        required: true
    },
    note: {
        type: String,
        required: false
    }
});

const motorcycle = mongoose.model('Motorcycle', motorcyclesSchema);

module.exports = motorcycle;