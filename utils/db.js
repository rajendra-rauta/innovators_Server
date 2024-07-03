const mongoose = require("mongoose");

// mongoose.connect(" mongodb://127.0.0.1:27017/MERN");

// const URI = "mongodb://127.0.0.1:27017/MERN"
const URI = process.env.MONGODB_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log("conection sucessfull to detabse");
    } catch (error) {

        console.error("detabase connection error");
        
       

        process.exit(0);

    };
};

module.exports = connectDb;