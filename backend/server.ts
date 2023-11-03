require('dotenv/config')
const express = require('express');
const cors = require('express-cors')
const PORT = process.env.PORT
const HOST = process.env.HOST
const server = express();

server.use(cors({
    allowedOrigins: ['localhost:3000']
}))
server.use(express.json())
server.listen(PORT, HOST, () => console.log(`Server listenning ${PORT}`))