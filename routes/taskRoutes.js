const { Router } = require('express');
const { list, create, update, destroy } = require('../controllers/taskController');
const { authMiddleware } = require('../middlewares/authMiddleware'); 

const router = Router();

router.get('/', authMiddleware, list);
router.post('/', authMiddleware, create);
router.put('/:id', authMiddleware, update);
router.delete('/:id', authMiddleware, destroy);

module.exports = router;