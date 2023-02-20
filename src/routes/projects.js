import express from 'express';
import validate from 'express-validation';

import * as userController from '../controllers/user/user.controller';
import * as projectValidator from '../controllers/projects/project.validator'
import * as projectController from '../controllers/projects/project.controller'

const router = express.Router();

//= ===============================
// Projects routes
//= ===============================

router.get(
    '/all',
    projectController.getAllProjects,
);

router.post('/tasks',
    validate(projectValidator.tasks),
    projectController.getTaskByProject,
)

router.post('/tasks/logs/add',
    validate(projectValidator.addLog),
    projectController.addTaskLogs
)

router.post('/tasks/logs/add',
    validate(projectValidator.addLog),
    projectController.addTaskLogs
)

router.post('/logs',
    projectController.getLogsByProject
)

router.put('/tasks/logs/update',
    validate(projectValidator.tasks),
    projectController.updateLog
)

router.post('/tasks/logs',
    validate(projectValidator.tasksLogs),
    projectController.getLogsByTasks
)

router.get('/tasks/logs/:startDate/:endDate/:unit/:userId',
    projectController.getLogsByTasksAndProject
)

router.get('/tasks/users/:id',
    projectController.getTaskByUser
)

module.exports = router;
