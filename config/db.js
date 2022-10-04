<<<<<<< HEAD
const mongoose = require("mongoose")

const connectDB = async(req,res) =>{
	try{
		const connect = await mongoose.connect(process.env.DBCONNECT, {
		UseNewUrlParser:true,
		UseUnifiedTopology:true
	});
		console.log(`connected to mongoDb through ${connect.connection.host} successfull`)
	}
	catch(error){
		console.log(error)
	}
}

=======
const mongoose = require('mongoose')

const connectDB = async(req,res)=>{
    try {
            const connect = await mongoose.connect(process.env.DB_CONNECT,{
            useNewUrlParser:true,
            useUnifiedTopology:true,
        });
        console.log(`connection to mongoDb successful${connect.connection.host}`)
    } catch (error) {
       return res.status(500).json(error)
    }
}
>>>>>>> 3bc12cc ('yy')
module.exports = connectDB