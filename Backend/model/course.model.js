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
    }
});

module.exports = mongoose.model("Course", courseSchema);
