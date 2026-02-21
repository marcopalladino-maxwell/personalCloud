const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const upload = require('../config/multer');
const { isAuthenticated } = require('../middleware/auth');

// GET Dashboard
router.get('/dashboard', isAuthenticated, async (req, res) => {
    try {
        const userDir = path.join(__dirname, '../uploads', req.session.username);
        let files = [];

        if (fs.existsSync(userDir)) {
            files = fs.readdirSync(userDir).map(filename => {
                const ext = path.extname(filename).toLowerCase();
                const isVideo = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv'].includes(ext);
                return {
                    filename,
                    path: `/uploads/${req.session.username}/${filename}`,
                    isVideo
                };
            });
        }

        res.render('dashboard', {
            username: req.session.username,
            files,
            message: null
        });
    } catch (error) {
        res.render('dashboard', {
            username: req.session.username,
            files: [],
            message: 'Error loading files'
        });
    }
});

// POST Upload files
router.post('/upload', isAuthenticated, upload.array('files', 10), (req, res) => {
    res.redirect('/dashboard');
});

// DELETE file
router.post('/delete/:filename', isAuthenticated, (req, res) => {
    try {
        const filename = req.params.filename;
        const filePath = path.join(__dirname, '../uploads', req.session.username, filename);

        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        res.redirect('/dashboard');
    } catch (error) {
        res.redirect('/dashboard');
    }
});

module.exports = router;
