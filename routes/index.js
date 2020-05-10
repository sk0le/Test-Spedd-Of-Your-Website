const express = require("express")
const axios = require("axios").default
const router = express.Router()

router.get('', (req, res) => {
    res.render("index")
})
router.post('', (req, res, next) => {
    const { url } = req.body;

    let errors = []

    if(!url) {
        errors.push({ msg: 'Please enter url' })
    }

    if(errors > 0) {
        res.render('index', {
            errors,
            url
        });
    } else {
        let times = []
        const start = Date.now();

        for(i = 0; i < 50; i++) {
            axios.get(url)
                .then(response => {
                    let realTime = Date.now() - start; // calculate time difference
                    times.push(realTime)
                    console.log(times)
                })
                .catch(err => console.log(err))
        }
        const averageTime = times.reduce((a, b) => a + b, 0)
        res.render('index', {
            averageTime
        })
    }
})
router.get('/donate', (req, res) => {
    res.render("donate")
})

module.exports = router