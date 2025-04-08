const mongoose = require('mongoose')

const connectDB = async () => {
    let dbURI = 'mongodb+srv://rounakbasak12:Iamok1234@cluster0.vnfppbu.mongodb.net/';
    try {
        await mongoose.connect(dbURI);
        console.log("MongoDB Connected Successfully ✅");
    } catch (error) {
        console.log("MongoDB Connection Error ❌");
        process.exit(1);
    }
}

module.exports = connectDB;