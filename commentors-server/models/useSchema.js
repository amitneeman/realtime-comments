const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    //guid : {type: String, required : true},
    //userName : {type: String, required : true},
    displayName : {type: String, required : true}
});

module.exports = User;