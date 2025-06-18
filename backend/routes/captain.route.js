const express=require('express');
const router = express.Router();
const {body}=require('express-validator')
const captainController=require('../controllers/captain.cont')
const authMiddleware = require('../middlewares/auth');
const blackListTokenModel = require('../models/blackListToken.model');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid Email'),

    body('fullname.firstname').isLength({min:3}).withMessage('firstname must be atleast 3 char long'),
    body('fullname.lastname').isLength({min:3}).withMessage('lastname must be atleast 3 char long'),
   

    body('password').isLength({min:6}).withMessage('6 char long'),

    body('vehicle.color').isLength({min:3}).withMessage('3 char long'),

    body('vehicle.plate').isLength({min:3}).withMessage('3 char long'),

    body('vehicle.capacity').isInt({min:1}).withMessage('atleat 1'),

    body('vehicle.vehicleType').isIn(['car','motorcycyle','auto']).withMessage('Invalid')
], 
captainController.registerCaptain
);

router.post('/login',[
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({min:6}).withMessage('password must be 6 char long atleast ')
],
captainController.loginCaptain)

router.get('/profile', authMiddleware.authCaptain, captainController.getCaptainProfile)

router.get('/logout', authMiddleware.authCaptain, captainController.logoutCaptain)

module.exports=router;

