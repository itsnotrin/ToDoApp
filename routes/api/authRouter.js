const { Router } = require('express')
const router = Router()
const sqlite3 = require('sqlite3').verbose();
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
    console.log(password, base64String)
    db.each(`SELECT * FROM logins WHERE username = '${username}'`, (err, row) => {
        if (err) {
            console.log(err);
            throw err;
        }
        if (!err){
            if(base64String == row.password){
                req.session.loggedIn = true
                req.session.username = username
                res.redirect('/')
            }
            else{
                res.redirect('/fail')
            }

        }
        
    }, () => {
        console.log('query completed')
    });

});

router.post('/signup', (req, res) => {
    //Eventually code signup into here.
})




module.exports = router;