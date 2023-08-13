const server = require('./src/server')
require('./src/database/index')

const { PORT } = require("./src/config/envs");



server.listen(PORT, ()=>{
console.log(`Server listening on port ${PORT}`)
})