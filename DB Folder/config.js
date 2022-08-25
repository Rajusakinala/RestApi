const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
.then(()=>{console.log("Successfully connected to Database")})
.catch(()=>{console.log("not able to connect Database")})
