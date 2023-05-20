const mongoose = require('mongoose');

const connectDB = async () => {

    try{

        //MongoDB Connection String
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`MongoDB Connected: ${conn.connection.host}`)

    }catch(err){

        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB