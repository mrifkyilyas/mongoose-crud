const express = require('express')
const route = express.Router()
const {getAll,create,deleteOne,update} = require('../../controllers/transaction')


route.get('/',getAll)
route.put('/:id',update)
route.delete('/:id',deleteOne)
route.post('/',create)








module.exports = route