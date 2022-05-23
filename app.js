const express = require('express')
const tasksRouter = require('./routes/tasks');
const connectDB = require('./DB/connect');
const notFound = require('./middleware/notfound');
const errorHandler = require('./middleware/errorHandler');

require('dotenv').config();

//create the application
const port = process.env.PORT || 5000;
const app = express();

//middlewares
app.use(express.static('./public'))
app.use(express.json());
app.use('/api/v1/tasks', tasksRouter)
app.use(notFound)
app.use(errorHandler)

const start = async () => {
  try{
      await connectDB();
      app.listen(port , () => {
          console.log('server listening on port ' + port)
      })
  }catch(err){
      console.log(err)
  }
}

start()