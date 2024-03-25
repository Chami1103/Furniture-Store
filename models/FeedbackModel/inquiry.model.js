const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const inquirySchema = new Schema({
    inquiryId: { type: Number, required: false, unique: true, index: true },
    firstName : { type : String, required : true },
    lastName : { type : String, required : true },
    Email : { type : String, required : true},
    Phone : { type: Number, required: true},
    date: {  type: Date, required: false, default: Date.now },
    title : { type: String, required: true },
    inquiryMsg : { type : String, required : true }
},{
    timestamps: true
}); 

// Pre-save middleware to auto-increment inquiryId
inquirySchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastInquiry = await Inquiry.findOne({}, {}, { sort: { 'inquiryId': -1 } });
        this.inquiryId = lastInquiry ? lastInquiry.inquiryId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

 const Inquiry = mongoose.model('Inquiry',inquirySchema);
 module.exports = Inquiry;