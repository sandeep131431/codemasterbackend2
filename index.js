const express = require('express')
const app = express();
require('dotenv').config();
const main =  require('./src/config/db')
const cookieParser =  require('cookie-parser');
const redisClient = require('./src/config/redis');
const problemRouter = require('./src/routes/ContestProblem')
const contestRouter = require('./src/routes/Contest');
// const submitRouter = require("./routes/submit")
const cors = require('cors')



app.use(cors({
    // origin: 'http://localhost:5173',
    origin:"*",
    credentials: true 
}))

app.use(express.json());
app.use(cookieParser());

app.use('/problem',problemRouter);
app.use('/contest',contestRouter);






const InitalizeConnection = async ()=>{
    try{

        await Promise.all([main(),redisClient.connect()]);
        console.log("DB Connected");
        
        app.listen(process.env.PORT, ()=>{
            console.log("Server listening at port number: "+ process.env.PORT);
        })

    }
    catch(err){
        console.log("Error: "+err);
    }
}


InitalizeConnection();
//redisClient.connect()



