const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title:{
        type:String,
        required:[true,"please enter the course title "]
    },
    description:{
        type:String,
        required:[true,"please enter the course description "]
    },
    lectures:{
        type:Array,
        required:[true,"please add lectures "],
    }
})