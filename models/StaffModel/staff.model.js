const jwt = require('jsonwebtoken');
const mongoose =require('mongoose');
const bcrypt  = require('bcryptjs');

const Schema = mongoose.Schema;

const employeeSchema = new Schema({                                                                                                                                                                                                                                                                                                                                                                                                 
    empId : { type: Number, required: false, unique: true, index: true },
    empfirstName: { type: String, required: true },
    empLastName: { type: String, required: true },
    empEmail: { type: String, required: true, match: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/, },
    empPassword :{type : String, required : true, },
    empConfirmPassword : {type: String, required: true },
    empContactNumber: {  type: Number,  required: true },
    Gender: { type: String, required: true },
    Position: { type: String, required: true },
    joinedDate: { type: Date, required: true },
    resetToken:{
        String,
        expireToken:Date,
    },
    tokens: [
        {
            token : {
                type : String,
                required: true
            }
        }
    ]
    

}, {
    timestamps: true,
});

// Pre-save middleware to auto-increment empId
employeeSchema.pre('save', async function (next) {
    if (!this.isNew) {
        return next();
    }
    try {
        const lastEmployee = await Employee.findOne({}, {}, { sort: { 'empId': -1 } });
        this.empId = lastEmployee ? lastEmployee.empId + 1 : 1;
        next();
    } catch (error) {
        return next(error);
    }
});


//Hashing Password
employeeSchema.pre('save', async function (next){
    console.log("Hi I am pre");
    if(this.isModified('empPassword') || this.isModified('empConfirmPassword')){
        console.log("Hi I am pre password");
        const saltRounds = 6; 
        if (this.isModified('empPassword')) {
            this.empPassword = await bcrypt.hash(this.empPassword, saltRounds);
        }
        if (this.isModified('empConfirmPassword')) {
            this.empConfirmPassword = await bcrypt.hash(this.empConfirmPassword, saltRounds);
        }
    }
    next();
});


// Generate token with  secret key
employeeSchema.methods.generateAuthToken = async function () {
    try {
        const token = jwt.sign({ _id: this._id }, 'MYNAMEISFURNITUREMANAGEMENTSTORESRILANKA');
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (err) {
        console.log(err);
    }
};

const Employee = mongoose.model('Employee', employeeSchema);
module.exports = Employee;