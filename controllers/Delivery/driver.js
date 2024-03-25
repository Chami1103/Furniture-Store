const router = require("express").Router();
const Driver = require('../../models/DeliveryModel/driver.model');


/* GET all drivers.('http://localhost:8081/api/delivery/drivers/getalldrivers')  */

router.route('/getalldrivers').get((_req, res) => {
    Driver.find()
        .then(driver => res.json(driver))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add New Driver. ('http://localhost:8081/api/delivery/drivers/addnewdriver')

router.route("/addnewdriver").post((req,res)=>{

    const empFirstName = req.body.empFirstName;
    const empLastName = req.body.empLastName;
	const empEmail = req.body.empEmail;
    const contactNumber = Number(req.body.contactNumber);
	const licenceType = req.body.licenceType;
	

    const newDriver = new Driver({
        empFirstName,
        empLastName,
        empEmail,
        contactNumber,
        licenceType
    })

    newDriver.save()  
    .then(()=>{res.json("Successfully Added New Driver !") //Driver added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});

// Update Driver details ('http://localhost:8081/api/delivery/drivers/updatedriver')
router.route('/updatedriver/:id').put((req, res) => {
    const id = req.params.id;

    Driver.findByIdAndUpdate(id)
        .then(driver => {
            if (!driver) {
                return res.status(404).json('Driver not found');
            }
            driver.empFirstName = req.body.empFirstName;
            driver.empLastName = req.body.empLastName;
			driver.empEmail = req.body.empEmail;
            driver.contactNumber = Number(req.body.contactNumber);
			driver.licenceType = req.body.licenceType;

            driver.save()
                .then(() => res.json('Driver details updated successfully!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Remove Driver ('http://localhost:8081/api/delivery/drivers/removedriver')

router.route('/removedriver/:id').delete((req, res) => {
    Driver.findByIdAndDelete(req.params.id)
        .then(() => res.json(' Successfully remove driver from the system !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one driver details ('http://localhost:8081/api/delivery/drivers/getdriverbyid')

router.route('/getdriverbyid/:id').get((req, res) => {
    Driver.findById(req.params.id)
        .then(driver => res.json(driver))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;

// router.get('/_search', function (req, res, next) {
// 	var page = Number((req.query.page ?? 1) - 1);
// 	var size = Number(req.query.size ?? 5);
// 	var searchQuery = req.query.query ?? '*';

// 	const query = { $text: { $search: searchQuery } }

// 	console.log(query);
// 	Driver.find(query,
// 		(e, r) => {
// 			res.setHeader('X-Total-Count', r.length)
// 			Driver.find(query,
// 				(ee, rr) => {
// 					res.json(rr)
// 				}
// 			).limit(size)
// 				.skip(size * page);
// 		}
// 	)
// });
