// banco
const mongoose = require("mongoose");

// id
const uuidv1 = require('uuid/v1');

// CRYPT
const crypto = require('crypto');

const UserSchema = new mongoose.Schema({
    nome: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true
    },
    senha_negossada: {
        type: String,
        trim: true,
        required: true
    },
    sal:  String,
    criado: {
        type: Date,
        default: Date.now
    },
    atualizado: Date

});


UserSchema.virtual("password")
.set(function(password){
    this._password = password

    this.sal = uuidv1();

    this.senha_negossada = this.encriptedPassword(password)
})
.get(function() {
    return this._password
})

UserSchema.methods = {
    encriptedPassword: function(password) {
        if(!password) return "";
        try {
            return crypto.createHmac('sha1', this.sal)
            .update(password)
            .digest('hex');
        } catch (err) {
            return '';
        }
    } 
}

module.exports = mongoose.model("User", UserSchema )

