// routs/userRoute.js
const express = require('express');
const userController = require('../Controllers/userController');

const router = express.Router();

// ✅ All routes
router
  .route('/')
  .get(userController.getAllUsers)   // GET all users
  .post(userController.createUser);  // CREATE new user

router
  .route('/:id')
  .get(userController.getUserByID)   // GET user by ID
  .patch(userController.updateUser)  
  .delete(userController.deleteUser);

module.exports = router;
