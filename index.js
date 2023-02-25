const app = require("./app")
const database = require("./database")


const PORT = 3001

app.listen(PORT, async () => {
    const db = await database.sync({ force: false, native: true })
    console.log('DataBase Conection', db.config.dialectOptions)
    console.log(`API In Server: http://localhost:${PORT}`)
})

