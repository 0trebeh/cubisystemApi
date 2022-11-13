const { Router } = require('express');
const router = Router();

const { 
    getPeticiones,
    createPeticion,
    updatePeticion,
    deletePeticion
} = require('../controllers/request.controllers');

router.get('/', getPeticiones);
router.post('/newPeticion', createPeticion);
router.put('/:id', updatePeticion);
router.delete('/:id', deletePeticion);

module.exports = router;