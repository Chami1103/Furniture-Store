const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const paymentSchema = new Schema({

    paymentId : { type:Number, required:false, unique: true, index: true },
    paymentMethod :  { type:String, required:true, unique: true},
    paymentAmount : { type:String, required:true, unique: true},
    customerName :{ type:String, required: true },
    transactionDate : { type:Date, required: true },

});

// Pre-save middleware to auto-increment paymentId
paymentSchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastPayment = await Payment.findOne({}, {}, { sort: { 'paymentId': -1 } });
        this.paymentId = lastPayment ? lastPayment.paymentId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});


const Payment = mongoose.model('Payment',paymentSchema);
module.exports = Payment;


