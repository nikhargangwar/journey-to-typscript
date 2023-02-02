//express app
const express = require('express');
const app = express();

const userRouter = require('./src/routers/user')

//middleware
app.use(express.json());
app.use('/user',userRouter)

const port = process.env.PORT || 8000


app.listen(port,()=>console.log('server running'))

