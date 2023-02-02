const express = require('express');
const userController = require('../controllers/userController');
const userRouter = express.Router();
//routes
userRouter.get('/',userController.getUserController);
userRouter.post('/',userController.postUserController);

module.exports = userRouter;

