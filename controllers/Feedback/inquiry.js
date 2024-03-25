const router = require("express").Router();
const Inquiry = require('../../models/FeedbackModel/inquiry.model');

  //add Inquiry ('http://localhost:8081/api/feedback/inquiry/addinquiry')

  router.route("/addinquiry").post((req,res)=>{

    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const Email = req.body.Email;
    const Phone = Number(req.body.Phone);
    const title = req.body.title;
    const inquiryMsg = req.body.inquiryMsg;

    const newInquiry = new Inquiry({
        firstName, 
        lastName,
        Phone,
        Email,
        title,
        inquiryMsg
    })

    newInquiry.save()  
    .then(()=>{res.json("Successfully added your Inquiry !") //Inquiry added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});



// get all Inquiries ('http://localhost:8081/api/feedback/inquiry/getallinquiries')

router.route('/getallinquiries').get((_req, res) => {
    Inquiry.find()
        .then(inquiry => res.json(inquiry))
        .catch(err => res.status(400).json('Error: ' + err));
});


//Remove inquiry ('http://localhost:8081/api/feedback/inquiry/removeinquiry')

router.route('/removeinquiry/:id').delete((req, res) => {
    Inquiry.findByIdAndDelete(req.params.id)
        .then(() => res.json('Inquiry deleted successfully !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one inquiry ('http://localhost:8081/api/feedback/inquiry/getinquirybyid')

router.route('/getinquirybyid/:id').get((req, res) => {
    Inquiry.findById(req.params.id)
        .then(inquiry => res.json(inquiry))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;
