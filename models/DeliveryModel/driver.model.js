const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const driverSchema = new Schema({
    driverId: { type: Number, required: false, unique: true, index: true },
	empFirstName : { type : String, required : true },
    empLastName : { type : String, required : true },
	empEmail: { type : String, required : true, match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,},
    contactNumber: {type: String, required: true},
    licenceType : { type : String, required : true },
},{
    timestamps: true
}); 

// Pre-save middleware to auto-increment driverId
driverSchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastDriver = await Driver.findOne({}, {}, { sort: { 'driverId': -1 } });
        this.driverId = lastDriver ? lastDriver.driverId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

 const Driver = mongoose.model('Driver',driverSchema);
 module.exports = Driver;


 