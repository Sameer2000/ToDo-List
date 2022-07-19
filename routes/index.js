const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home_controller');

// Home
router.get('/', homeController.home);

// To add task
router.post('/add-task', homeController.addTask);

// To delete task
router.post('/delete-task', homeController.deleteTask);

module.exports = router;