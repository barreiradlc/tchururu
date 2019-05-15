const mongoose = require("mongoose");

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

module.exports = mongoose.model("Post", SchemaPost);