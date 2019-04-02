const {
    Member
} = require('../models')
class Controller {
    static getAll(req, res) {
        Member.find()
            .then(members => {
                res.status(200).json(members)
            })
            .catch(err => {
                res.status(500).json(err)
            })


    }

    static create(req, res) {
        console.log(req.body)
        Member.create(req.body)
            .then(succes => {
                res.status(201).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })

    }

    static deleteOne(req, res) {
        Member.findOneAndDelete(req.params.id)
            .then(succes => {
                res.status(200).json(succes)
            })
            .catch(err => {
                res.status(500).json(err)
            })



    }

    static update(req, res) {
        Member.findOneAndUpdate(req.params.id, {
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