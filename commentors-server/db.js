const mongoose = require('mongoose');
const config = require('./config/dev');

class db{
    static connect(){
        mongoose.connect(config.dbConnectionString).then((sucess) => {
            console.log('suceesfuly connected to the database');
        }).catch((err) => {
            console.log(err);
        })
    }
}

module.exports = db;