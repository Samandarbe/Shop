import { Router } from 'express'
import CT from '../controllers/index.js'

const router = Router()

router.get('/users', CT.user.GET)
router.post('/users', CT.user.POST)
router.put('/users/:userId', CT.user.UPDATE)
router.delete('/users/:userId', CT.user.DELETE)

export default router