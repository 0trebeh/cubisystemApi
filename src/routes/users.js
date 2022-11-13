const { Router } = require('express');
const router = Router();

const { 
    getUser,
    getLogin,
    createUser,
    updateUser,
    updatePassword,
    deleteUser
} = require('../controllers/users.controllers');

router.get('/:id', getUser);
router.post('/login', getLogin);
router.post('/newUser', createUser);
router.put('/:id', updateUser);
router.put('password/:id', updatePassword);
router.delete('/:id', deleteUser);

module.exports = router;