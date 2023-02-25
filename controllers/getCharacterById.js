const database = require("../database")

const getCharacterByID = async (id) => {
    const { Character } = database.models
    if (isNaN(id))
        throw new Error('El ID no es un numero')
    if (id > 826 || id < 1)
        throw new Error('El ID solicitado no existe')
    try {
        const data = await Character.findByPk(Number(id))
        return data
    } catch (error) {
        return error.message
    }
}
module.exports = getCharacterByID