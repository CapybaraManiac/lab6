import { Router } from 'express';
import * as abiturientController from '../resources/abiturients/abiturient.controller.js';

const router = Router();

// GET /api/abiturients
router.get('/', abiturientController.getAllAbiturients);

// GET /api/abiturients/:id
router.get('/:id', abiturientController.getAbiturientById);

// GET /api/abiturients/:id/exams
router.get('/:id/exams', abiturientController.getAbiturientExams);

// POST /api/abiturients
router.post('/', abiturientController.createAbiturient);

// PUT /api/abiturients/:id
router.put('/:id', abiturientController.updateAbiturient);

// DELETE /api/abiturients/:id
router.delete('/:id', abiturientController.deleteAbiturient);

export default router; 