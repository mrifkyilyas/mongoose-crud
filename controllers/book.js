const {
    Book
} = require('../models')
class Controller {
    static getAll(req, res) {
        let where = {}
        if(req.query && req.query.value){
            where = {
                title: req.query.value
            }
        }
        Book.find(where)
            .then(books => {
                res.status(200).json(books)
            })
            .catch(err => {
                res.status(500).json(err)
            })


    }

    static create(req, res) {
        console.log(req.body)
        Book.create(req.body)
            .then(succes => {
                res.status(201).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static deleteOne(req, res) {
        Book.findOneAndDelete(req.params.id)
            .then(succes => {
                res.status(200).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })



    }

    static update(req, res) {
        Book.findOneAndUpdate(req.params.id, {
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