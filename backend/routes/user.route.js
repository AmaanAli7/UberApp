const express= require('express');
const router= express.Router();
const {body}=require('express-validator');
const userController=require('../controllers/user.cont');
const authMiddleware =require('../Middlewares/auth')


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min:3}).withMessage('First name must be 3 characters long'),
body('password').isLength({min:6}).withMessage('password must be 6 characters Long')
],userController.registerUser)

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password is Invalid')
],
userController.loginUser)

router.get('/profile',authMiddleware.authUser, userController.getUserProfile);

router.get('/logout',authMiddleware.authUser, userController.logoutUser);

module.exports= router;
