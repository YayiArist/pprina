require('dotenv').config();

module.exports={
    MONGO_URI: process.env.MONGO_URI || 'mongodb+srv://admin:admin@cluster0.kaqwyjq.mongodb.net/',
    PORT:process.env.PORT || 3000
}