const express = require('express');
const router = express.Router();
const viewController = require('./engineerViews.js');
const dataController = require('./engineerData.js');
const apiController = require('./engineerAPI.js');

// ========== API Routes ==========
router.get('/api', dataController.index, apiController.index);        // GET all engineers (JSON)
router.get('/api/:id', dataController.show, apiController.show);      // GET single engineer (JSON)
router.delete('/api/:id', dataController.destroy, apiController.destroy); // DELETE engineer (JSON response)

// ========== View Routes ==========
router.get('/', dataController.index, viewController.index);          // Index Page
router.get('/new', viewController.newView);                           // New Engineer Form
router.post('/', dataController.create, viewController.redirectHome); // Create Engineer

router.get('/:id/edit', dataController.show, viewController.edit);    // Edit Form
router.put('/:id', dataController.update, viewController.redirectShow); // Update Engineer

router.delete('/:id', dataController.destroy, viewController.redirectHome); // Delete Engineer

router.get('/:id', dataController.show, viewController.show);         // Show Single Engineer

module.exports = router;
