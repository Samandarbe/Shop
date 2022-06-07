import { Router } from 'express'
import CT from '../controllers/index.js'

const router = Router()

router.get('/products', CT.product.GET)
router.post('/products', CT.product.POST)
// router.put('/users/:userId', CT.UPDATE)
// router.delete('/users/:userId', CT.DELETE)

export default router