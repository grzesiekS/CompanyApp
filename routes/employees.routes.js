const express = require('express');
const EmployeeController = require('../controllers/employees.controller');
const router = express.Router();

router.get('/employees', EmployeeController.getAll);

router.get('/employees/random', EmployeeController.getRandom);

router.get('/employees/:id', EmployeeController.getID);

router.post('/employees', EmployeeController.postNew);

router.put('/employees/:id', EmployeeController.updateOne);

router.delete('/employees/:id', EmployeeController.deleteOne);

module.exports = router;
