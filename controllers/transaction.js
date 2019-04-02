const {
    Transaction
} = require('../models')
class Controller {
    static getAll(req, res) {
        let where = {}
        if(req.query && req.query.value){
            where = {
                booklist : req.query.value
                
            }
        }
        Transaction.find()
        .populate('member')
        .populate('booklist')
            .then(members => {
                res.status(200).json(members)
            })
            .catch(err => {
                res.status(500).json(err)
            })


    }

    static create(req, res) {
        console.log(req.body)
        Transaction.create(req.body)
            .then(succes => {
                res.status(201).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static deleteOne(req, res) {
        Transaction.findOneAndDelete(req.params.id)
            .then(succes => {
                res.status(200).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })



    }

    static update(req, res) {
        Transaction.findOneAndUpdate(req.params.id, {
                ...req.body
            }, {
                new: true
            })
            .then(succes => {
                res.status(200).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })
    }

}

module.exports = Controller