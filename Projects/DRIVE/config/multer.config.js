const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const firebase = require('./firebase.config');
const serviceAccount = require('../men-drive-8a50b-firebase-adminsdk-fbsvc-6a36a5ca69.json');

const storage = firebaseStorage({
    credentials: firebase.credential.cert(serviceAccount),
    bucketName:'men-drive-8a50b.firebasestorage.app',
    unique: true
});

const upload = multer({
    storage: storage
    // limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB limit
});

module.exports = upload;