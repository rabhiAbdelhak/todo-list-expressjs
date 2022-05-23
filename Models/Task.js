const mongoose = require('mongoose');



const taskSchema = new mongoose.Schema({
     name : {
         type: String,
         required : [true, 'you must provide a name'],
         trim: true,
         maxLength : [100, 'The name must be less then 100 caracters'],
     },
     completed: {
         type: Boolean,
         default: false,
     },
})


module.exports = mongoose.model('Task', taskSchema);