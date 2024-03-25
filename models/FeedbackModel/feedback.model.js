const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({
    feedbackId: { type: Number, required: false, unique: true, index: true },
    Username: { type: String, required: true },
    date: {  type: Date, required: true, default: Date.now },
    starCount: {type: Number, required: true},
    feedbackMsg: { type: String, required: true },
    suggetion: { type: String, required: true },

}, 
{
    timestamps: true
});

// Pre-save middleware to auto-increment feedbackId
feedbackSchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastFeedback = await Feedback.findOne({}, {}, { sort: { 'feedbackId': -1 } });
        this.feedbackId = lastFeedback ? lastFeedback.feedbackId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});

const Feedback = mongoose.model('Feedback', feedbackSchema);
module.exports = Feedback;
