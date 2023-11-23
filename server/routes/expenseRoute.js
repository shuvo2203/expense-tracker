const express = require('express');
const { 
     createExpense,
     getSingleExpense,
     getAllExpense,
     updateExpense,
     deleteExpense
    } = require('../controllers/expense/expenseController');
const router = express.Router();


router.route('/addexpense').post(createExpense);
router.route('/allexpense').get(getAllExpense);
router.route('/expense/:id').get(getSingleExpense)
                           .put(updateExpense)
                           .delete(deleteExpense)



module.exports = router;