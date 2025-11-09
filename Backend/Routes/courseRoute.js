const express = require("express")
const courseController = require("../Controllers/courseController")
const router = express.Router()


router
    .route("/")
    .get(courseController.getAllCourses)
    .post(courseController.createCourse)

router
    .route("/:id")
    .get(courseController.getCourseById)
    .patch(courseController.updateCourse)
    .delete(courseController.deleteCourse) 


module.exports = router