const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Вы ввели некорректные данные.');

    const validPassword = await bcrypt.compare(req.body.пароль, user.пароль);
    if (!validPassword) return res.status(400).send('Вы ввели некорректные данные.');

    res.send(true);
});

function validate (req) {
    const schema = {
        email: Joi.string().min(5).max(255).required().email(),
        пароль: Joi.string().min(5).max(255).required()
    }

    return Joi.validate(req, schema);
}

module.exports = router;
