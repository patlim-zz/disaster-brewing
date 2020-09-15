const router = require('express').Router()
let Temperatures = require('../models/temperatures.model')

router.route('/').get((req, res) => {
  Temperatures.find() //find is a mongoose method
    .then(temperatures => res.json(temperatures))
    .catch(err => res.status(400).json("Error: ", err))
});

module.exports = router