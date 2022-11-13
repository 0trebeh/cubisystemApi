const { Router } = require('express');
const router = Router();

const { 
    getName,
    getEmpleados, 
    createEmpresa, 
    createAdmin,
    createEmpleado,
    getAdmins,
    deleteEmpleado
} = require('../controllers/users.controllers');

router.get('/:id', getEmpleados);
router.get('/admins/:id', getAdmins);
router.post('/comprobName', getName);
router.post('/empresa', createEmpresa);
router.post('/admin', createAdmin);
router.post('/empleado', createEmpleado);
router.delete('/empleado/:id', deleteEmpleado);

module.exports = router;