const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');

router.get('/register', (req, res) => {
    res.render('register');
});

router.post('/register',
    body('email').trim().isEmail(),
    body('password').trim().isLength({ min: 6 }),
    body('username').trim().notEmpty().isLength({ min: 3 }),
    (req, res) => {

        const errors = validationResult(req);
        // console.log(errors);

        if (!errors.isEmpty()) {
            return res.status(400).json({ 
                errors: errors.array(),
                message: "Invalid data input"
            });
        }


        // res.send(errors);
    })

module.exports = router;