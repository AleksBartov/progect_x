const Joi = require('joi');
const mongoose = require('mongoose');

const User = mongoose.model('User', new mongoose.Schema({
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
}));

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
