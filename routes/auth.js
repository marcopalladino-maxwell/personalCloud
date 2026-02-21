const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { isNotAuthenticated } = require('../middleware/auth');
const { isValidRegistrationCode } = require('../config/registrationCodes');

// GET Login page
router.get('/login', isNotAuthenticated, (req, res) => {
    res.render('login', { error: null });
});

// POST Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findByEmail(email);
        if (!user) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        const isValid = await user.comparePassword(password);
        if (!isValid) {
            return res.render('login', { error: 'Invalid email or password' });
        }

        req.session.userId = user.id;
        req.session.username = user.username;
        res.redirect('/dashboard');
    } catch (error) {
        res.render('login', { error: 'An error occurred. Please try again.' });
    }
});

// GET Signup page
router.get('/signup', isNotAuthenticated, (req, res) => {
    res.render('signup', { error: null });
});

// POST Signup
router.post('/signup', async (req, res) => {
    try {
        const { username, email, password, confirmPassword, registrationCode } = req.body;

        // Validate registration code
        if (!registrationCode || !isValidRegistrationCode(registrationCode)) {
            return res.render('signup', { error: 'Codice di registrazione non valido' });
        }

        if (password !== confirmPassword) {
            return res.render('signup', { error: 'Passwords do not match' });
        }

        const existingUser = await User.findByEmail(email);
        if (existingUser) {
            return res.render('signup', { error: 'Email already registered' });
        }

        const user = await User.create(username, email, password);
        req.session.userId = user.id;
        req.session.username = user.username;
        res.redirect('/dashboard');
    } catch (error) {
        res.render('signup', { error: 'An error occurred. Please try again.' });
    }
});

// GET Logout
router.get('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/');
});

module.exports = router;
