const { Router } = require('express');
const router = Router();

const { 
    getPeticion,
    getPeticiones,
    createPeticion,
    updatePeticion,
    deletePeticion
} = require('../controllers/request.controllers');

router.get('/', getPeticiones);
router.get('/:id', getPeticion);
router.post('/newPeticion', createPeticion);
router.put('/:id', updatePeticion);
router.delete('/:id', deletePeticion);

module.exports = router;