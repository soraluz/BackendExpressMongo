const express = require("express")
const mongoose = require("mongoose")
const {config}= require("dotenv")
const bodyParser= require("body-parser")
config()

const bookRoutes= require("./routes/book.routes")
const port = process.env.PORT

const app= express()
//parseador de bodys
app.use(bodyParser.json())

//conexion BD
//mongoose.connect(process.env.MONGO_URL, { dbName: process.env.MONGO_DB_NAME })

//const db = mongoose.connection

//rutas

app.use("/", bookRoutes)


app.listen(port,()=>{
    console.log(`Escuchando en el puerto ${port}`)
})