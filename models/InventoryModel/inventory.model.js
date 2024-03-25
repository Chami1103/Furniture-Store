const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inventorySchema = new Schema({

    itemId: { type: Number, required: false, unique: true, index: true },
    itemCategory : { type : String, required : true },
    itemName : { type : String, required : true },
    quantityOnHand : { type : Number, required : true },
    minStockLevel : { type : Number, required : true },
    maxStockLevel : { type : Number, required : true },
    purchasePrice : { type : String, required : true },
    sellingPrice : { type : String, required : true },
    supplierName : { type : String, required : true },
    totalStockPrice: {type : String, required : false }
},{
    timestamps: true
}); 

// Pre-save middleware to auto-increment itemId
inventorySchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastItem = await Inventory.findOne({}, {}, { sort: { 'itemId': -1 } });
        this.itemId = lastItem ? lastItem.itemId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

 const Inventory = mongoose.model('Inventory',inventorySchema);
 module.exports = Inventory;
