const Firebase = require('firebase-admin');

const serviceAccount = require('../men-drive-8a50b-firebase-adminsdk-fbsvc-6a36a5ca69.json')

const firebase = Firebase.initializeApp({
    credential: Firebase.credential.cert(serviceAccount),
    storageBucket: 'men-drive-8a50b.firebasestorage.app'
});

module.exports = Firebase;