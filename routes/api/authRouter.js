const { Router } = require('express')
const router = Router()
const sqlite3 = require('sqlite3')
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the database.');
});

//Add all the endpoints
router.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password
    let bufferObj = Buffer.from(password, "utf8");
    let base64String = bufferObj.toString("base64");

    db.get(`SELECT * FROM logins WHERE username = '${username}'`, (err, row) => {
    if(!row){
        req.session.loggedIn = false
        res.redirect('/login?fail=false')
    }
    else{
        if(base64String == row.password){
            req.session.loggedIn = true
            req.session.username = username
            res.redirect('/?loggedin=true')
        }
        else{
            req.session.loggedIn = false
            res.redirect('/login?fail=false')
        }
    }
    })

});

router.post('/signup', (req, res) => {
    //Eventually code signup into here.
})




module.exports = router;