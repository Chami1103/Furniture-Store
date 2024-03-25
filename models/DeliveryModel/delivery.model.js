const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const deliverySchema = new Schema({

    deliveryId: { type: Number, required: false, unique: true, index: true },
	receiverAddress : { type : String, required : true },
    receiverContactNumber : {type : Number,  required : true},
    assignedDriver : { type : String, required : true },
    deliveryDate : { type : Date, required : true },
    deliveryStatus : { type : String, required : true },
    vehicleNo: { type : String, required : true },
},{
    timestamps: true
}); 

// Pre-save middleware to auto-increment deliveryId
deliverySchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastDelivery = await Delivery.findOne({}, {}, { sort: { 'deliveryId': -1 } });
        this.deliveryId = lastDelivery ? lastDelivery.deliveryId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

 const Delivery = mongoose.model('Delivery',deliverySchema);
 module.exports = Delivery;












// const mongoose = require('mongoose');
//  const DeliveryModel = new mongoose.Schema({
//     _id: mongoose.ObjectId,
//     deliveryID: String,
//     orderID: String,
//     receiverAddress: String,
//     assignedDriver: String,
//     lat: String,
//     long: String,
//     status: String,
//     remarks: String

// });

// DeliveryModel.index({'$**': 'text'});

// module.exports = DeliveryModel;