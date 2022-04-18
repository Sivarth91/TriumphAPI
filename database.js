require('dotenv').config();
const url = process.env.URL;
const mongoose = require('mongoose');

mongoose.connect(url).then(() => { 
    console.log("database connection successful");
}).catch((err) => {
    console.error(`Database connection failed : ${err}`);
});
