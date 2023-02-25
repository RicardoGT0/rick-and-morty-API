const { Router } = require('express');
const getAllCharacters = require('../controllers/getAllCharacters');
const getCharacterByID = require('../controllers/getCharacterById');

const routesCharacter = new Router();

routesCharacter.get('/all', async (req, res) => {
    try {
        const respuesta = await getAllCharacters()
        res.status(200).json(respuesta)
    } catch (error) {
        
        res.status(400).send(error)
    }
});

routesCharacter.get('/:id', async (req, res) => {
    const { id } = req.params
    try {
        const respuesta = await getCharacterByID(id)
        res.status(200).json(respuesta)
    } catch (error) {
        res.status(400).json({Error: error.message})
    }
});

/* routesCharacter.post('/', SessionController.store);
routesCharacter.put('/', SessionController.store);
routesCharacter.delete('/', SessionController.store); */

module.exports = routesCharacter;
