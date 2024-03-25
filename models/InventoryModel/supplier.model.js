const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    supplierId: { type: Number, required: false, unique: true, index: true },
    supplierName : { type : String, required : true },
    supplierEmail : { type : String, required : true, match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,},
    supplierContactNumber : {  type : Number,  required : true },
    supplierAddress : { type : String, required : true },
    supplierItemCategory: { type : String, required : true },

},{
    timestamps: true
}); 

// Pre-save middleware to auto-increment supplierId
supplierSchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastSupplier = await Supplier.findOne({}, {}, { sort: { 'supplierId': -1 } });
        this.supplierId = lastSupplier ? lastSupplier.supplierId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

const Supplier = mongoose.model('Supplier',supplierSchema);
module.exports = Supplier;