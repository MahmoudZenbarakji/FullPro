const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name:{
    type:String,
    required:[true,"please enter the name "]
},
email:{
    type:String,
    required:[true,"please enter the email "],
    unique:true,
},
password:{
    type:String,
    required:[true,"please enter the password "],
}
})

module.exports =  mongoose.model('User',userSchema);
