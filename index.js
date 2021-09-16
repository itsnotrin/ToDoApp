const express = require('express')
const app = express()
const port = process.env.PORT || 8000
const bodyParser = require('body-parser')
var session = require('express-session');
app.use(session({secret:'notguessablesecrethere'
,name:'uniqueSessionID'
,resave:false}))

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

//Import the routers
const MainRouter = require('./routes/frontend/mainrouter')
const AuthRouter = require('./routes/api/authRouter')

//Server Settings
app.use(express.static('./routes/frontend/Static'))
// set the view engine to ejs
app.set('view engine', 'ejs');

//Initialize the routers
app.use('/', MainRouter)
app.use('/auth', AuthRouter)


//Launch the web server
try{
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}//Throw the error if there is one
catch(err){
    console.log(`ERROR: ${err}`)
}
