const express = require("express");
const courseController = require("../Controllers/courseController");
const multer = require("multer");
const router = express.Router();

// Configure multer for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
});
const upload = multer({ storage });

// Routes
router
  .route("/")
  .get(courseController.getAllCourses)
  .post(upload.single("image"), courseController.createCourse); // ⬅️ image upload

router
  .route("/:id")
  .get(courseController.getCourseById)
  .patch(upload.single("image"), courseController.updateCourse) // ⬅️ optional image update
  .delete(courseController.deleteCourse);

module.exports = router;
