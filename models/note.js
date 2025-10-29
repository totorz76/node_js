const mongoose = require('mongoose')

const noteSchema = new mongoose.Schema(
    {
        titre:{type:String, required:true},
        contenu: {type: String, required:true}
    }
);

module.exports = mongoose.model('Note', noteSchema);