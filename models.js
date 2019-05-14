const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/basic_mongoose');
const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2},
    content: { type: String, required: true, minlength: 2},
    }, {timestamps: true}
)
const MessageSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, maxlength: 45},
    content: { type: String, required: true, minlength: 2, maxlength: 255},
    comments: [CommentSchema]
    }, {timestamps: true}
)

module.exports = mongoose.model('Message', MessageSchema);

// mongoose.model('Message', MessageSchema);
// var User = mongoose.model('Message')
// module.exports = User;