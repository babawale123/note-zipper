const express = require('express')
const dotenv = require('dotenv')
const cors = require("cors")
const connectDB = require("./config/db")
const userRoute = require("./routes/userRoute")
const noteRoute = require("./routes/noteRoute")
const app = express()
dotenv.config()
connectDB()

const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions))
app.use(cors(corsOptions));
app.use(express.json())
app.use('/api/user', userRoute)
app.use('/api/notes', noteRoute)

const port = process.env.port || 4000
app.listen(port, ()=>console.log(`app running on port ${port}...`))