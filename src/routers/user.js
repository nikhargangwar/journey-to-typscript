import express from 'express';
import userController from '../controllers/userController.js';
const userRouter = express.Router();
//routes
userRouter.get('/',userController.getUserController);
userRouter.post('/',userController.postUserController);

export default userRouter;

