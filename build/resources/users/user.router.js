import express from 'express';
const router = express.Router();
router.get('/', (_req, res) => {
    res.json({ message: 'Get all users' });
});
export { router as userRouter };
//# sourceMappingURL=user.router.js.map