const router = require("express").Router();
const Inventory = require('../../models/InventoryModel/inventory.model');


/* GET all Items.('http://localhost:8081/api/inventory/inventory/getallitems')  */

router.route('/getallitems').get((_req, res) => {
    Inventory.find()
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json('Error: ' + err));
});

// Add New Item. ('http://localhost:8081/api/inventory/inventory/addnewitem')

router.route("/addnewitem").post((req,res)=>{

    const itemCategory = req.body.itemCategory;
    const itemName = req.body.itemName;
    const quantityOnHand = Number(req.body.quantityOnHand);
    const minStockLevel = Number(req.body.minStockLevel);
    const maxStockLevel = Number(req.body.maxStockLevel);
	const purchasePrice = req.body.purchasePrice;
	const sellingPrice = req.body.sellingPrice;
    const totalStockPrice = req.body.totalStockPrice;
	const supplierName = req.body.supplierName;

    const newProduct = new Inventory({
        itemCategory, 
        itemName,
        quantityOnHand,
        minStockLevel,
        maxStockLevel,
        purchasePrice,
        sellingPrice,
        totalStockPrice,
        supplierName
    })

    newProduct.save()  
    .then(()=>{res.json("Successfully Added New Item !") //Item added status
    }).catch(err => res.status(400).json('Error: ' + err));  //display err
});

// Update Item details ('http://localhost:8081/api/inventory/inventory/updateitem')
router.route('/updateitem/:id').put((req, res) => {
    const id = req.params.id;

    Inventory.findByIdAndUpdate(id)
        .then(inventory => {
            if (!inventory) {
                return res.status(404).json('Item not found');
            }

            inventory.itemCategory = req.body.itemCategory;
            inventory.itemName = req.body.itemName;
            inventory.quantityOnHand = Number(req.body.quantityOnHand);
			inventory.minStockLevel = Number(req.body.minStockLevel);
            inventory.maxStockLevel = Number(req.body.maxStockLevel);
			inventory.purchasePrice = req.body.purchasePrice;
			inventory.sellingPrice = req.body.sellingPrice;
            inventory.totalStockPrice = req.body.totalStockPrice;
			inventory.supplierName = req.body.supplierName;
            inventory.save()
                .then(() => res.json('Item details updated successfully!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

//Remove Item  ('http://localhost:8081/api/inventory/inventory/removeitem')

router.route('/removeitem/:id').delete((req, res) => {
    Inventory.findByIdAndDelete(req.params.id)
        .then(() => res.json(' Successfully remove item !'))
        .catch(err => res.status(400).json('Error: ' + err));
});

//view one Item details ('http://localhost:8081/api/inventory/inventory/getitembyid')

router.route('/getitembyid/:id').get((req, res) => {
    Inventory.findById(req.params.id)
        .then(inventory => res.json(inventory))
        .catch(err => res.status(400).json('Error: ' + err));
});


module.exports = router;

