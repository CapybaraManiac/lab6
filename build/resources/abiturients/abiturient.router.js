import express from 'express';
const router = express.Router();
router.get('/', (_req, res) => {
    res.json({ message: 'Get all abiturients' });
});
export { router as abiturientRouter };
//# sourceMappingURL=abiturient.router.js.map