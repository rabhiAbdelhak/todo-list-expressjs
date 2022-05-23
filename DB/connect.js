const mongoose = require('mongoose');
require('dotenv').config();


const connectionString = `mongodb+srv://abdelhak:${process.env.DATABASE_PASSWORD}@taskmanagers.im5ft.mongodb.net/${process.env.DATABASE}?retryWrites=true&w=majority`

const connectDB = () => {
    return mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    
    })
}


module.exports = connectDB