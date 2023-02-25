/* const axios = require("axios")
const URL = 'https://rickandmortyapi.com/api/character'

const getAllCharacters = async () => {
    const numeros = Array.from(Array(828).keys());
    numeros.shift()
    const cadena = numeros.join(',')
    try {
        const { data } = await axios(`${URL}/${cadena}`)
        return data
    } catch (error) {
        return error.message
    }
}

const getCharacterByID = async (id) => {
    if (isNaN(id))
        throw new Error('El ID no es un numero')
    if (id > 826 || id < 1)
        throw new Error('El ID solicitado no existe')
    try {
        const { data } = await axios(`${URL}/${id}`)
        return data
    } catch (error) {
        return error.message
    }
}

module.exports = { getAllCharacters, getCharacterByID } */