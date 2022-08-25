const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const db = require('./DB Folder/config');
// console.log(db);
const router = require('./Views/router');

const port = process.env.PORT || 3000;
app.get('/', (req, res)=>{
    res.send('welcome to employee database')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(router)

app.listen(port, ()=>{console.log(`Server listening on port ${port}`);})
