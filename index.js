const jsonServer = require('json-server')

const contactServer = jsonServer.create()
const middleware = jsonServer.defaults()
const PORT = 3000
const route = jsonServer.router('db.json')

contactServer.use(middleware)
contactServer.use(route)

contactServer.listen(PORT,()=>{
    console.log(`contactServer started at PORT : ${PORT} and waiting for client request!!!`);
})