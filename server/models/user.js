const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "name is required"]
    },
    email:{
        type:String,
        required:[true, "email is required"]
    },
    password:{
        type:String,
        required:[true, "password is required"]
    },
    iAdmin:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true
});

userSchema.methods.getToken = function(){
    return jwt.sign({id:this._id}, process.env.KEY,{
        expiresIn:"5d"
    });
}

module.exports = mongoose.model('user', userSchema);