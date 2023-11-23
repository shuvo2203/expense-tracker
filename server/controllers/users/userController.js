const User = require('../../models/user');
const bcrypt = require('bcryptjs');

exports.createUser=async(req, res)=>{
    const{ name, email, password } = req.body;
    const existUser = await User.findOne({email:email});
    if(existUser){
        res.status(400).json('user already registered,please login');
    }
    const user = await User.create({
        name,
        email,
        password : await bcrypt.hash(password, 10)
    });
    const token = user.getToken();
    res.status(200).json({
        success:true,
        user,
        token
    });
}

//login user
exports.loginUser=async(req, res)=>{
    const{email, password} = req.body;
    const user = await User.findOne({email:email}).select("+password");
    if(!user){
        res.status(400).json('user not registered,please register first');
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        res.status(400).json('wrong password');
    }
    const token = user.getToken();
    res.status(200).json({
        success:true,
        message:"login success...",
        user,
        token
    });
}

//get all users
exports.getAllUsers=async(req, res)=>{
    const users = await User.find({});
    if(!users){
        res.status(400).json('no users exist');
    }
    res.status(200).json({
        success:true,
        users
    });
}