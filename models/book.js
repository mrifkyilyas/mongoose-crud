const mongoose = require('mongoose')
const Schema = mongoose.Schema

const bookSchema = new Schema({
    isbn:{
        type:String,
        required:[true,'isbn harus diisi']
    },
    title:{
        type:String,
        required:[true,'title harus diisi'],
        maxlength:[100,'judul harus kurang dari 100 char']
    },
    author:{
        type:String,
        required:[true,'author harus diisi']
    },
    category:{
        type:String,
        required:[true,'category tidak boleh kosong'],
        maxlength:[50,'author harus kurang dari 50 char']
    },
    stock:Number
})

const Book = mongoose.model('Book',bookSchema)


module.exports = Book
