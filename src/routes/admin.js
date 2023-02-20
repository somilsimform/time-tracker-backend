import express from 'express';
import * as userController from '../controllers/user/user.controller';
import * as adminController from '../controllers/admin/admin.controllers'
const router = express.Router();

//= ===============================
// Admin routes
//= ===============================
// router.get('/allUsers', userController.allUsers);

router.get('/allLogs/:status', adminController.getAllLogs)
router.post('/logs/update/status', adminController.updateLogStatus)

module.exports = router;
