const mongoose = require('mongoose');

const mongoSchema = new mongoose.Schema({
        name: {
                type: String,
                required: true
        },

        age: {
                type: String,
                required: true
        },

        date: {
                type: Date,
                required: true,
                default: Date.now
        }
})

module.exports = mongoose.model('Users', mongoSchema)