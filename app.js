const express = require('express')
const app = express()
const port = 3000
const index = require('./routes/')
const mongoose = require('mongoose')
const url = 'mongodb://127.0.0.1/book'
mongoose.connect(url, { useNewUrlParser: true })


app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',index)




app.listen(port,()=>{
    console.log(`working on 127.0.0.1:${port}`)
})