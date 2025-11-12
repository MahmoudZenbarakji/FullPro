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
        const course = await Course.findById(courseId).populate("user")
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
    const { title, description, lectures, user } = req.body;
    const image = req.file ? req.file.filename : null;

    const newCourse = await Course.create({ title, description, lectures, user, image });
    const populatedCourse = await Course.findById(newCourse._id).populate("user");

    res.status(201).json({
      status: "success",
      data: populatedCourse
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to create course"
    });
  }
};


exports.updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const { title, description, lectures, user } = req.body;
    const image = req.file ? req.file.filename : undefined;

    const updateData = { title, description, lectures, user };
    if (image) updateData.image = image;

    const updatedCourse = await Course.findByIdAndUpdate(courseId, updateData, { new: true }).populate("user");

    res.status(200).json({
      status: "success",
      data: updatedCourse
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      status: "error",
      message: "Failed to update course"
    });
  }
};


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