const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', false)
    const connection = await mongoose.connect(process.env.MONGO_URI)
    console.log('Mongo Connected')
}

module.exports = { connectDB }