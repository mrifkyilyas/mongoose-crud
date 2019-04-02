const express = require('express')
const route = express.Router()
const book = require('./book/')
const member = require('./member')
const transaction = require('./transaction')


route.get('/',(req,res)=>{
    console.log('masuk')
    res.send('ini index')
})

route.use('/book',book)
route.use('/member',member)
route.use('/transaction',transaction)








module.exports = route