const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const User = require('./useSchema');
var childSchema = new Schema({ name: 'string' });

let comment = new Schema();

comment.add({
    subject: {type: String, required: true},
    user : {type: User, required : true},
    content: {type: String, required: true},
    replies: {type: [comment], required: false}
});

module.exports = mongoose.model('Comment',comment);