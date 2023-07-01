const mongoose = require('mongoose');
const {Schema, model} = mongoose;

const UserSchema = new Schema({
    username: {type: string, required:true, min:3, unique: true},
    email: {type: string, required:true},
    password: {type: string, required:true},
});

const UserModel = model('User',UserSchema);

module.export = UserModel;