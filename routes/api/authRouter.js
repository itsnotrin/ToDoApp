const { Router } = require('express')
const router = Router();
const path = require('path')
var session = require('express-session');
const bodyParser = require('body-parser')

//Add all the endpoints
router.post('/', (req, res) => {
    console.log(req)
    req.session.loggedIn = true
    req.session.username = "mrrin"
    // console.log(req.session)
    res.redirect('/')
});




module.exports = router;