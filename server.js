require('dotenv').config() 
const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const userRouter=require('./routes/userRouter')
const noteRouter=require('./routes/noteRouter')

const app=express();
app.use(express.json());
app.use(cors());

const PORT=process.env.PORT

app.use("/users",userRouter);
app.use('/api/Notes',noteRouter)

app.listen(PORT,()=>{
    console.log("Server Started at Port: ",PORT);
})

const URI=process.env.MONGODB_URL
console.log(URI) 
mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},err=>{
    if(err)throw err;
    console.log("Connected to Mongo DB");
}) 