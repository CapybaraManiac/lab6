import { Request, Response } from 'express';
import * as abiturientService from './abiturient.service.js';

export async function getAllAbiturients(req: Request, res: Response) {
  try {
    const abiturients = await abiturientService.getAbiturients();
    res.json(abiturients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get abiturients' });
  }
}

export async function getAbiturientById(req: Request, res: Response) {
  try {
    const id = req.params['id'];
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    
    const abiturient = await abiturientService.getAbiturientById(id);
    
    if (!abiturient) {
      return res.status(404).json({ error: 'Abiturient not found' });
    }
    
    res.json(abiturient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get abiturient' });
  }
}

export async function getAbiturientExams(req: Request, res: Response) {
  try {
    const id = req.params['id'];
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    
    const exams = await abiturientService.getAbiturientExams(id);
    res.json(exams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get abiturient exams' });
  }
}

export async function createAbiturient(req: Request, res: Response) {
  try {
    const abiturient = await abiturientService.createAbiturient(req.body);
    res.status(201).json(abiturient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create abiturient' });
  }
}

export async function updateAbiturient(req: Request, res: Response) {
  try {
    const id = req.params['id'];
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    
    const abiturient = await abiturientService.updateAbiturient(id, req.body);
    
    if (!abiturient) {
      return res.status(404).json({ error: 'Abiturient not found' });
    }
    
    res.json(abiturient);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update abiturient' });
  }
}

export async function deleteAbiturient(req: Request, res: Response) {
  try {
    const id = req.params['id'];
    if (!id) {
      return res.status(400).json({ error: 'ID is required' });
    }
    
    const success = await abiturientService.deleteAbiturient(id);
    
    if (!success) {
      return res.status(404).json({ error: 'Abiturient not found' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete abiturient' });
  }
} 