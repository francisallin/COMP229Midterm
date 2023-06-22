//create server
const express = require('express');
const bodyParser = require('body-parser'); // required to read body of request

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//mongodb connection
const dbConfig = require('./config/db.config');
const mongoose = require('mongoose');
mongoose.connect(dbConfig.url, {
    useNewUrlParser:true
})
.then(()=>{
    console.log('DB connection successful. ')
})
.catch(error=>{
    console.log("DB connection is unsuccessful: ", error)
});
//homepage
app.get('/', (req, res)=>{
    res.json({
        "message": "It is working! "
    })
});

require('./app/routes/midterm.routes')(app);
app.listen(3000, ()=>{
    console.log("server is running");
});