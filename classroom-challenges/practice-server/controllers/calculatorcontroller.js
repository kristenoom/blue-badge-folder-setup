let router = require('express').Router();

//localhost:3000/calculator/add
router.post('/add', function (req, res) {
    let number1 = req.body.num1;
    let number2 = req.body.num2;

    let total = Number(number1) + +number2;
    // let response = { message: 'this is calculator add' };
    // res.json(response);
    //res.send("It working from the add endpoint");
    res.json({ total: total });
})

module.exports = router;