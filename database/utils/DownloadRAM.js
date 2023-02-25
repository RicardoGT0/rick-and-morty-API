const axios = require("axios")
const URL = 'https://rickandmortyapi.com/api/character'

const downloadAll = async () => {
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

const uploadAll = async (database) => {
    const { Character, Episode } = database.models
    try {
        const downInfo = await downloadAll()
        downInfo.forEach(async personaje => {
            const species = personaje.species
            const location = personaje.location.name
            const origin = personaje.origin.name
            const status = personaje.status
            const gender = personaje.gender
            const image = personaje.image
            const type = personaje.type
            const name = personaje.name

            const data = {
                species, location, origin, status, gender, image, type, name
            }
            const char = await Character.create(data)
            personaje.episode.forEach(async element => {
                const episode = element.split("/").pop()//extraer el # de episodio            
                await Episode.create({ id_character:char.id, num_episode:episode })
            })
        });
    } catch (error) {
        return error
    }

}

module.exports = uploadAll