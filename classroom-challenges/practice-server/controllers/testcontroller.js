let router = require('express').Router();


//localhost:3000/test/post
router.post('/post', function (req, res) {
    let response = { message: "This is a test." };
    res.json(response);
    // res.send('This is a message from the test endpoint on the server!');
});

module.exports = router;