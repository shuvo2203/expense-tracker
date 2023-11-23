const express = require('express');
const { createUser, getAllUsers, loginUser } = require('../controllers/users/userController');
const router = express.Router();


router.route('/register').post(createUser);
router.route('/login').post(loginUser);
router.route('/users').get(getAllUsers);



module.exports = router;