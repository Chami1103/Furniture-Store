const router = require('express').Router();
let Payment = require('../../models/PaymentModel/payment.model');

/* GET all payments.('http://localhost:8081/api/payment/payment/getallpayments')  */

router.route('/getallpayments').get((_req, res) => {
    Payment.find()
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json('Error: ' + err));
});

// New Payment. ('http://localhost:8081/api/payment/payment/newpayment')

router.route("/newpayment").post((req,res)=>{

    const paymentMethod = req.body.paymentMethod;
    const paymentAmount = req.body.paymentAmount;
    const customerName = req.body.customerName;
    const transactionDate = Date.parse(req.body.transactionDate);

    const newPayment = new Payment({
        paymentMethod, 
        paymentAmount,
        customerName,
        transactionDate,
    })

    newPayment.save()  
    .then(()=>{res.json("Payment Successfull !!") //Payment status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});


//Remove payment history by id  ('http://localhost:8081/api/payment/payment/removepayment')

router.route('/removepayment/:id').delete((req, res) => {
    Payment.findByIdAndDelete(req.params.id)
        .then(() => res.json(' Successfully remove payment record !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one payment  ('http://localhost:8081/api/payment/payment/viewpaymentbyid')

router.route('/viewpaymentbyid/:id').get((req, res) => {
    Payment.findById(req.params.id)
        .then(payment => res.json(payment))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;