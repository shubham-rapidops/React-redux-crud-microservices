const mongoose = require("mongoose");

const schema = new mongoose.Schema({
    name:{type: String, trim: true, required: true },
    age:{type: Number, required: true },
    address:{type: String, trim: true, required: true }
})

module.exports = mongoose.model('Schema',schema)