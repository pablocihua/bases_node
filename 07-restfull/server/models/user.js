const mongoose = require('mongoose'),
    uniqueValidator = require('mongoose-unique-validator');;

let Schema = mongoose.Schema,
    interface = require('../interfaces/user'),
    userSchema = new Schema(interface);

userSchema.methods.toJSON = function() {
    let user = this,
        userObj = user.toObject();

    delete userObj.password;

    return userObj;
}

userSchema.plugin(uniqueValidator, { message: '{PATH} has to be unique!' });

module.exports = mongoose.model('User', userSchema);