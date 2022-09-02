var mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: String,
    id: Number
});

const UserModel = mongoose.model('user', UserSchema);


module.exports = UserModel;