const mongoose = require('mongoose')
const Schema = mongoose.Schema

const memberSchema = new Schema({
    name: {
        type: String,
        required: [true, 'nama tidak boleh kosong']

    },
    address: {
        type: String,
        required: [true, 'alamat tidak boleh kosong']

    },
    zipcode: {
        type: String,
        required: [true, 'kode pos tidak boleh kosong']

    },
    email: {
        type: String,
        validate: [{
                validator: function (v) {
                    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v)
                },
                message: 'format email salah'
            },
            {
                validator: function (v) {
                    return mongoose.model('Member', memberSchema).find({
                            _id: {
                                $ne: this._id
                            },
                            email: v
                        })
                        .then(members => {
                            if (members.length !== 0) {
                                return false
                            }
                        })
                        .catch(err => {
                            return err.message
                        })
                },
                message: 'email sudah digunakan'
            }
        ]
    },
    phone: {
        type: String,
        required: [true, 'no telepon harap diisi'],
        minlength: [11, 'harus 11-13 digit!'],
        maxlength: [13, 'harus 11-13 digit!'],
    }
})

const Member = mongoose.model('Member', memberSchema)

module.exports = Member