const router = require('express').Router();
let CardPay = require('../../models/PaymentModel/cardpay.model');

/* GET all card details.('http://localhost:8081/api/payment/cardpay/getallcards')  */

router.route('/getallcards').get((_req, res) => {
    CardPay.find()
        .then(cardpay => res.json(cardpay))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add New Card. ('http://localhost:8081/api/payment/cardpay/addnewcard')

router.route("/addnewcard").post((req,res)=>{

    const cardnumber = req.body.cardnumber;
    const customerName = req.body.customerName;
    const cvc = Number(req.body.cvc);
    const expiry = Date.parse(req.body.expiry);

    const newCardPay = new CardPay({
        cardnumber, 
        customerName,
        expiry,
        cvc
    })

    newCardPay.save()  
    .then(()=>{res.json("Successfully add new card !") //card added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});

// Update card details ('http://localhost:8081/api/payment/cardpay/updatecard')
router.route('/updatecard/:id').put((req, res) => {
    const id = req.params.id;

    CardPay.findByIdAndUpdate(id)
        .then(cardpay => {
            if (!cardpay) {
                return res.status(404).json('Card not found');
            }

            cardpay.cardnumber = req.body.cardnumber;
            cardpay.customerName = req.body.customerName;
			cardpay.cvc = Number(req.body.cvc);
            cardpay.expiry = Date.parse(req.body.expiry);

            cardpay.save()
                .then(() => res.json('Card details updated successfully!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Remove Card ('http://localhost:8081/api/payment/cardpay/removecard')

router.route('/removecard/:id').delete((req, res) => {
    CardPay.findByIdAndDelete(req.params.id)
        .then(() => res.json(' Successfully remove card !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one card  ('http://localhost:8081/api/payment/cardpay/getcardbyid')

router.route('/getcardbyid/:id').get((req, res) => {
    CardPay.findById(req.params.id)
        .then(cardpay => res.json(cardpay))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;