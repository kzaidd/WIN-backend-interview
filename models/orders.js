const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({
    createdTime: {
        type: Date, 
        default: new Date()
    },
    customerName: String,
    totalFee: Number,
    services: [
        {   _id: false,
            serviceId : Number
        }
    ], 
    updatedTime: {
        type: Date, 
        default: new Date()
    }
}, 
{ versionKey: false} )


const Order = mongoose.model("orders", orderSchema)

module.exports = Order