var express = require('express');
var router = express.Router();
const User = require('../models/User')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/select-stream', async (req, res) => {
  try {
    const { user_id, stream_choice } = req.body;
    const newUser = new User({ user_id, stream_choice });
    await newUser.save();
    res.status(200).json({ message: 'Stream selection saved successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
