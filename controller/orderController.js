const mongoose = require('mongoose');
const Order = require('../models/orders.js');


// GET ALL EXISTING ORDERS
const getAllOrders = async (req, res) => {
    try {
        const allOrder = await Order.find()
        // console.log(allOrder);
        res.status(200).json(allOrder);

    } catch (error) {
        res.status(400).json({error: error})
    }
}

const getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findById({_id: req.params.id});
        if (order) {
            res.status(200).send({order});

        } else {
            res.status(400).send({msg: "order not found"})
        }

    } catch (error) {
        
    }
}

//CREATE NEW ORDERS
const createOrder = async (req, res) => {
    try {
        const orderBody = req.body;

        const recentOrder = await Order.find().sort({field: "desc", _id: -1}).limit(1);

        const order = recentOrder[0];

        if (order) { 
            const lastOrderTime = order.createdTime;
            const lastOrder = (new Date().getTime() - new Date(lastOrderTime).getTime())/(1000*60*60);

            if (lastOrder < 3) {
                res.status(400).send({error: "You need to wait atleast 3 hours to create a new post!"})

            } else {
                const newOrder = new Order(orderBody);
                await newOrder.save()

                res.status(200).send({msg: "success"})
            }
            
        } else {

            const newOrder = new Order(orderBody);
            await newOrder.save();

            res.status(200).send({msg: "order created"});
        }
    } catch (error) {
        res.status(400).send({error: error});
    }
}


//DELETE ORDERS
const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send({error: "Object id is not valid!"});

        } else {
            await Order.findByIdAndDelete(id);

            res.status(200).send({msg: "order deleted"})
        }

    } catch (error) {
        res.status(400).send({error: error});
    }
}


// UPDATE ORDERS
const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const recentOrder = await Order.find().sort({field: "asc", _id: -1}).limit(1);

        const order = recentOrder[0];
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            res.status(400).send({error: "Object id is not valid!"});

        } else if (order) {
            const lastOrderTime = order.createdTime;
            const lastOrder = (new Date().getTime() - new Date(lastOrderTime).getTime())/(1000*60*60);

            if (lastOrder < 3) {
                res.status(400).send({error:"You need to wait atleast 3 hours to create a new post!"});

            } else {

                const update = {};
                update.updatedTime = new Date();
                
                for (const key of Object.keys(body)){
                    if (body[key] !== '') {
                        update[key] = body[key];

                        let arr = []
                        if (Array.isArray(body[key])) {
                            arr.push(body[key])
                        }
                    }
                }

                const filter = {_id: id};
                await Order.findOneAndUpdate(filter, update);
                res.status(200).send({msg: "success"});
            }
        } 
    
    } catch (error) {
        res.send(400).send({error: error})
    }
}



module.exports = { getAllOrders, deleteOrder, updateOrder, createOrder, getSingleOrder }