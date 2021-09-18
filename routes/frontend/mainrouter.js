const { Router } = require('express')
const router = Router();
const path = require('path')

//Add all the endpoints
router.get('/', (req, res) => {
    //Uses the current directory and then sends the Static index.html
    if(req.query.loggedin == undefined){
        loggedin = false
    }
    else{
        loggedin = true
    }
    res.render(path.join(__dirname, './views/pages/index.ejs'), {
        "username": req.session.username,
        "loggedin": loggedin
    });
});

router.get('/login', (req, res) => {
    if(req.query.fail == undefined){
        failed = false
    }
    else{
        failed = true
    }
    res.render(path.join(__dirname, './views/pages/login.ejs'), {
        "failed": failed
    })
})



module.exports = router;