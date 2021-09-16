const express = require('express')
const app = express()
const port = process.env.PORT || 8000

//Import the routers
const MainRouter = require('./routes/frontend/mainrouter')

//Server Settings
app.use(express.static('./routes/frontend/Static'))
// set the view engine to ejs
app.set('view engine', 'ejs');

//Initialize the routers
app.use('/', MainRouter)


//Launch the web server
try{
    app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
    })
}//Throw the error if there is one
catch(err){
    console.log(`ERROR: ${err}`)
}
