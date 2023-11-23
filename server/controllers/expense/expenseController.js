const Expense = require('../../models/expenseModel');


//create income
exports.createExpense=async(req, res)=>{
    const{title,desc,type,amount,user}=req.body;
    const expense = await Expense.create({
        title,
        desc,
        type,
        amount,
        user
    });
    res.status(200).json({
        success:true,
        expense
    });
}

//get all income
exports.getAllExpense=async(req, res)=>{
    const expenses = await Expense.find({});
    if(!expenses){
        res.status(400).json('income not found');
    }
    res.status(200).json(expenses);
}

//get a single income
exports.getSingleExpense=async(req, res)=>{
    const expense = await Expense.findById(req.params.id);
    if(!expense){
        res.status(400).json('no records found');
    }
    res.status(200).json({
        success:true,
        expense
    });
}

//update income
exports.updateExpense=async(req, res)=>{
    const expense = await Expense.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!expense){
        res.status(400).json('no records found');
    }
    res.status(200).json(expense);
}

//delete a income
exports.deleteExpense=async(req, res)=>{
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if(!expense){
        res.status(400).json('no records found');
    }
    res.status(200).json({
        success:true,
        message:"expense delete successfully....."
    });
}