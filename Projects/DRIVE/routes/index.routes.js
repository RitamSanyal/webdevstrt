const express = require('express');
const authMiddleware = require('../middlewares/auth');
const firebase = require('../config/firebase.config');
const router = express.Router();
const upload = require('../config/multer.config');
const fileModel = require('../models/files.models');
const file = require('../models/files.models');

router.get('/home', authMiddleware, async(req, res) => {

    const userFiles = await fileModel.find({
        user: req.user.userId
    })

    console.log(userFiles);

    res.render('home',{
        files: userFiles
    });
});

router.post('/upload', authMiddleware, upload.single('file'), async (req, res) => {
    // res.send(req.file);
    const newFile = await fileModel.create({
        path: req.file.path,
        originalName: req.file.originalname,
        user: req.user.userId
    })
    res.json(newFile);
});

router.get('/download/:path',authMiddleware,async(req,res)=>{
    const loggedInUserId = req.user.userId;
    const path = req.params.path;
    const file = await fileModel.findOne({
        user: loggedInUserId,
        path: path
    })
    if(!file){
        return res.status(404).json({message: 'File not found'});
    }

    const signedUrl = await firebase.storage().bucket().file(file.path).getSignedUrl({
        action: 'read',
        expires: Date.now() + 60 * 1000 // 5 minutes
    });

    res.redirect(signedUrl[0]);
});

router.get('/logout', authMiddleware, (req, res) => {
    req.logout?.(); // For Passport.js, if used
    res.clearCookie('token'); // If using JWT in cookies
    res.redirect('/user/login');
});



module.exports = router;