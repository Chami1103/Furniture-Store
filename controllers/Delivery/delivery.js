const router = require("express").Router();
const Delivery = require('../../models/DeliveryModel/delivery.model');


/* GET delivery listing.('http://localhost:8081/api/delivery/delivery/getalldeliveries')  */

router.route('/getalldeliveries').get((_req, res) => {
    Delivery.find()
        .then(delivery => res.json(delivery))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add New Delivery. ('http://localhost:8081/api/delivery/delivery/addnewdelivery')

router.route("/addnewdelivery").post((req,res)=>{

    const receiverAddress = req.body.receiverAddress;
    const receiverContactNumber = Number(req.body.receiverContactNumber);
	const assignedDriver = req.body.assignedDriver;
    const deliveryDate = Date.parse(req.body.deliveryDate);
	const deliveryStatus = req.body.deliveryStatus;
	const vehicleNo = req.body.vehicleNo;

    const newDelivery = new Delivery({

        receiverAddress,
        receiverContactNumber,
        assignedDriver,
        deliveryDate,
        deliveryStatus,
		vehicleNo,
    })

    newDelivery.save()  
    .then(()=>{res.json("Successfully Added New Delivery !") //Delivery added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});

// Update Delivery details ('http://localhost:8081/api/delivery/delivery/updatedelivery')
router.route('/updatedelivery/:id').put((req, res) => {
    const id = req.params.id;

    Delivery.findByIdAndUpdate(id)
        .then(delivery => {
            if (!delivery) {
                return res.status(404).json('Delivery not found');
            }

            // delivery.orderID = req.body.orderID;
            delivery.receiverAddress = req.body.receiverAddress;
            delivery.receiverContactNumber = Number(req.body.receiverContactNumber);
			delivery.assignedDriver = req.body.assignedDriver;
            delivery.deliveryDate = Date.parse(req.body.deliveryDate);
			delivery.deliveryStatus = req.body.deliveryStatus;
			delivery.vehicleNo = req.body.vehicleNo;
			// delivery.deliveryItems = req.body.deliveryItems;
            delivery.save()
                .then(() => res.json('Delivery details updated successfully!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Remove Delivery ('http://localhost:8081/api/delivery/delivery/removedelivery')

router.route('/removedelivery/:id').delete((req, res) => {
    Delivery.findByIdAndDelete(req.params.id)
        .then(() => res.json(' Successfully remove Delivery !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one delivery details ('http://localhost:8081/api/delivery/delivery/getdeliverybyid')

router.route('/getdeliverybyid/:id').get((req, res) => {
    Delivery.findById(req.params.id)
        .then(delivery => res.json(delivery))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

// router.get('/_search', function (req, res, next) {

// 	var page = Number((req.query.page ?? 1) - 1);
// 	var size = Number(req.query.size ?? 5);
// 	var searchQuery = req.query.query ?? '*';

// 	const query = { $text: { $search: searchQuery } }

// 	console.log(query);
// 	Delivery
// 		.find(query,
// 			(e, r) => {
// 				res.setHeader('X-Total-Count', r.length)
// 				Delivery
// 					.find(query,
// 						(ee, rr) => {
// 							res.json(rr)
// 						}
// 					)
// 					.limit(size)
// 					.skip(size * page);
// 			}
// 		)

// });