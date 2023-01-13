const express = require('express');
const { getAllOrders, createOrder, deleteOrder, updateOrder, getSingleOrder }  = require("../controller/orderController.js")

const router = express.Router();


router.get('/', getAllOrders);
router.get("/:id", getSingleOrder);
router.post("/", createOrder);
router.delete("/:id", deleteOrder);
router.put("/:id", updateOrder );

module.exports = router