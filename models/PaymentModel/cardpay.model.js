const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const cardpaySchema = new Schema({

    cardId : { type:Number, required:false, unique: true, index: true },
    cardnumber : {
        type:String,
        required:true,
        unique: true,
    },

    customerName :{
        type:String,
        required: true
    },

    expiry :{
        type:Date,
        required: true
    },

    cvc :{
        type: Number ,
        required: true,
        unique: true,
    },  
   
},{
    timestamps: true,
});;

// Pre-save middleware to auto-increment cardId
cardpaySchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastCard = await CardPay.findOne({}, {}, { sort: { 'cardId': -1 } });
        this.cardId = lastCard ? lastCard.cardId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

const CardPay = mongoose.model('CardPay',cardpaySchema);
module.exports = CardPay;


