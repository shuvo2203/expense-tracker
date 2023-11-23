const Income = require('../../models/incomeModel');


//create income
exports.createIncome=async(req, res)=>{
    const{title,desc,type,amount,user}=req.body;
    const income = await Income.create({
        title,
        desc,
        type,
        amount,
        user
    });
    res.status(200).json({
        success:true,
        income
    });
}

//get all income
exports.getAllIncome=async(req, res)=>{
    const incomes = await Income.find({});
    if(!incomes){
        res.status(400).json('income not found');
    }
    res.status(200).json(incomes);
}

//get a single income
exports.getSingleIncome=async(req, res)=>{
    const income = await Income.findById(req.params.id);
    if(!income){
        res.status(400).json('no records found');
    }
    res.status(200).json({
        success:true,
        income
    });
}

//update income
exports.updateIncome=async(req, res)=>{
    const income = await Income.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!income){
        res.status(400).json('no records found');
    }
    res.status(200).json(income);
}

//delete a income
exports.deleteIncome=async(req, res)=>{
    const income = await Income.findByIdAndDelete(req.params.id);
    if(!income){
        res.status(400).json('no records found');
    }
    res.status(200).json({
        success:true,
        message:"income delete successfully....."
    });
}