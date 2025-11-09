const Course = require("../model/course.model")


exports.getAllCourses = async (req, res) => {
    try {
        const courses = await Course.find().populate("user");
        res.status(200).json({
            status: "success",
            result: courses.length,
            data: courses
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            status: "error",
            message: "Failed to fetch courses"
        });
    }
};


exports.getCourseById = async (req, res) => {
    try {
        const courseId = req.params.id
        const course = await Course.findById(courseId)
            res.status(200).json({
            status: "success",
            data: course
        })
        
    } catch (error) {
        console(error)
    }
}

exports.createCourse = async (req, res) => {
    try {
        const {title,description,lectures,user} = req.body 
        const newCourse = await Course.create({title,description,lectures,user})
        res.status(201).json({
            status:"success",
            data:newCourse
        })
    } catch (error) {
        console.log(error)
    }
}

exports.updateCourse = async (req,res) =>{
    try{
        const courseId = req.params.id
        const {title,description,lectures,user} = req.body 
        const updateCourse = await Course.findByIdAndUpdate(courseId,{title,description,lectures,user})
        res.status(200).json({
            status:"success",
            data :updateCourse
        })
    }catch(error){
        console.log(error)
    }
}

exports.deleteCourse = async (req,res) => {
    try{
        const neededTodelete = req.params.id
        const course = await Course.findByIdAndDelete(neededTodelete)
        res.status(200).json({
            status:"Success",
            data:course
        })
    }catch(error){
        console.log(error)
    }
}