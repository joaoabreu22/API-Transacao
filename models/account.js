const mongoose = require('mongoose')


const Account = mongoose.model('Account', {
    id_account: Number,
    data: Date,
    transaction: String,
    valor: Number

})


module.exports = Account