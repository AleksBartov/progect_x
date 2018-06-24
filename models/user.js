const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    псевдоним: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },
    пароль: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, config.get('myJWTkey'));
    return token;
}

const User = mongoose.model('User', userSchema);

function validateUser (user) {
    const schema = {
        псевдоним: Joi.string().min(5).max(50).required(),
        email: Joi.string().min(5).max(255).required().email(),
        пароль: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
