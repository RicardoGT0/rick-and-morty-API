const database = require("../database/index")

const getAllCharacters = async () => {
    const { Character } = database.models
    try {
        const data = await Character.findAll()
        return data
    } catch (error) {
        return error.message
    }
}

module.exports = getAllCharacters