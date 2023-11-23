const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true, "title is required"]
    },
    desc:{
        type:String,
        required:[true, "description is reqired"]
    },
    type:{
        type:String,
        default:"income"
    },
    amount:{
        type:Number,
        required:[true, "amount is required"]
    },
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"user"
    }
},{
    timestamps:true
});

module.exports = mongoose.model('expense', expenseSchema);