const homePageController = require('./homePageController');
const router = require('express').Router();

router.get('/home', (req, res) => {
    homePageController.getHomepageData()
    .then(resp => {
    res.status(200).send(resp)})
    .catch(err => console.log("Error"))
})

module.exports = router;