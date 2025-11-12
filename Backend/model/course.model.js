const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please enter the course title"]
    },
    description: {
        type: String,
        required: [true, "Please enter the course description"]
    },
    lectures: {
        type: Array,
        required: [true, "Please add lectures"]
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    image:{
        type:String,
        required:[true,"please add an image "]
        
    }
});

module.exports = mongoose.model("Course", courseSchema);
