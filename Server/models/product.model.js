import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image: {
    type: String,
    default: [],
  },
  category: [
    {
      type: mongoose.Schema.ObjectId,
      ref : "category"
    }
  ],
  subCategory : [
    {
        type : mongoose.Schema.ObjectId,
        ref : "subCategory"
    }
  ],
  unit : {
    type : String,
    default : null
  },
  stock : {
    type :Number,
    default : 0
  },
  price : {
    type : Number,
    default : null
  },
  discount : {
    type : Number,
    default : null
  },
   descrption : {
    type : String,
    default : ""
   },
   more_details : {
    type : String ,
    default : {}
   },
   publish : {
    type : Boolean,
    default : true
   }
},{
    timestamps : true
});

const ProductModel = mongoose.model("product", productSchema);

export default ProductModel;
