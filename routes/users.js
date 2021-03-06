const _ = require('lodash');
const bcrypt = require('bcrypt');
const { User, validate } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
    const { error } = validate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    let user = await User.findOne({ email: req.body.email });
    if (user) return res.status(400).send('Пользователь с такой электронной почтой уже зарегистрирован.');

    user = new User(_.pick(req.body, ['псевдоним', 'email', 'пароль']));
    const salt = await bcrypt.genSalt(10);
    user.пароль = await bcrypt.hash(user.пароль, salt);

    await user.save();

    const token = user.generateAuthToken();
    res.header('x-auth-token', token).send(`Пользователь ${user.псевдоним} успешно зарегистрирован`);
});

module.exports = router;
