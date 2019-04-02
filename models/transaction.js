const mongoose = require('mongoose')
const Schema = mongoose.Schema

const transactionSchema = new Schema({
    member:{type: Schema.Types.ObjectId,ref :'Member'},
    in_date : Date,
    out_date : Date,
    due_date : Date,
    fine : Number,
    booklist : [{type : Schema.Types.ObjectId, ref :'Book'}]
})
transactionSchema.pre('save',function(next){
    this.out_date = new Date()
    next()
})

transactionSchema.post('findOneAndUpdate',function(next){
    if(this.in_date > this.due_date){
        this.fine = Math.round(Math.abs(this.in_date.getTime() - this.due_date.getTime()) / (24 * 60 * 60 * 1000)) * 1000
    }
    this.save()
    next()
})

const Transaction = mongoose.model('Transaction',transactionSchema)


module.exports = Transaction
