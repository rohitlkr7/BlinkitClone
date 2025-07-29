import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    userId : {
        type : mongoose.Schema.ObjectId,
        ref : "User"
    },
    orderId : {
        type : String,
        required : [ " provide orderId"],
        unique : true
    }
},{
    timestamps : true
})

const orderModel = mongoose.model("oredr", orderSchema);

export default orderModel;