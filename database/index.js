const { Sequelize } = require("sequelize");
const Character = require("./models/Character");
const Episode = require("./models/Episode");
const Favorite = require("./models/Favorite");
const relationships = require("./models/relationships");
const User = require("./models/user");
const uploadAll = require("./utils/DownloadRAM");

const user = "postgres";
const pass = "012345";
const dbname = "rick_and_morty";
const server = "localhost"
const port = "5432"

const database = new Sequelize(`postgres://${user}:${pass}@${server}:${port}/${dbname}`, { logging: false })

Character(database)
Episode(database)
Favorite(database)
User(database)
relationships(database)
console.log('DataBase Model = ', database.models);

/* uploadAll(database)
    .then(() => console.log("Carga completada"))
    .catch((error) => console.log(error))
 */
module.exports = database