const express = require('express');
const { createIncome, getAllIncome, getSingleIncome, updateIncome, deleteIncome } = require('../controllers/income/incomeController');
const router = express.Router();


router.route('/addincome').post(createIncome);
router.route('/allincome').get(getAllIncome);
router.route('/income/:id').get(getSingleIncome)
                           .put(updateIncome)
                           .delete(deleteIncome)



module.exports = router;