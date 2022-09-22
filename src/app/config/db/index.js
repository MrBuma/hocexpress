const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost/khoahoc_dev');
        console.log('connect to success full !!!');
    } catch (error) {
        console.log(`connect to fail !!! ${error}`);   
    }
}

module.exports = {connect};