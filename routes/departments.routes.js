const express = require('express');
const DepartmentController = require('../controllers/departments.controller');

const router = express.Router();


router.get('/departments', DepartmentController.getAll);

router.get('/departments/random', DepartmentController.getRandom);

router.get('/departments/:id', DepartmentController.getID);

router.post('/departments', DepartmentController.postNew);

router.put('/departments/:id', DepartmentController.updateOne);

router.delete('/departments/:id', DepartmentController.deleteOne);

module.exports = router;
