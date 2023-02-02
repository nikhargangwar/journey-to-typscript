//express app
import express from 'express';

const app = express();

import userRouter from'./src/routers/user.js';

//middleware
app.use(express.json());
app.use('/user',userRouter);

const port =  8000;


app.listen(port,()=>console.log('server running'));

