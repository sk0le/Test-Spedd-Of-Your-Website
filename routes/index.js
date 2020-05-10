const express = require("express")
const axios = require("axios").default
const router = express.Router()

router.get('', (req, res) => {
    res.render("index")
})
router.post('', (req, res, next) => {
    const { url } = req.body;

    let errors = [];

    if (!url ) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (errors.length > 0) {
      res.render('index', {
        errors,
        url
      })} else {
        let times = [];

        for(i = 0; i < 50; i++) {
            axios.get(url)
                .then(response => {
                    const start = Date.now();
                    let realTime = Date.now() - start; // calculate time difference
                    times.push(realTime)
                })
                .catch(err => console.log(err))
        }
        const sum = times.reduce((a, b) => {
            return a + b;
        }, 0);
        console.log(sum)
        res.render('index')
    }
})
router.get('/donate', (req, res) => {
    res.render("donate")
})

module.exports = router