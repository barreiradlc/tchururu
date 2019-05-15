// banco
const mongoose = require("mongoose");

// modelagem Post
const SchemaPost = new mongoose.Schema({
    titulo: {
        type:String,
        required: 'é obrigatorio',
        minlength:4,
        maxlength:150
    },
    corpo: {
        type:String,
        required: 'é obrigatorio',
        minlength:4,
        maxlength:2000
    } 
});

// Export
module.exports = mongoose.model("Post", SchemaPost);