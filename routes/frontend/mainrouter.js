const { Router } = require('express')
const router = Router();
const path = require('path')

//Add all the endpoints
router.get('/', (req, res) => {
    //Uses the current directory and then sends the Static index.html
    res.render(path.join(__dirname, './views/pages/index.ejs'), {
        "username": "itsnotrin"
    });
});





module.exports = router;