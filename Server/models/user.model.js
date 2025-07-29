import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "provide email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "provide password"],
  },
  avtar: {
    type: String,
    default: "",
  },
  mobile: {
    type: Number,
    default: null,
  },
  refresh_token: {
    type: String,
    default: "",
  },
  verify_email: {
    type: Boolean,
    default: false,
  },
  last_login_date: {
    type: Date,
    default: null,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive", "suspended"],
    default: "Active",
  },
  address_details: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "address",
    },
  ],
  shoping_cart: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "cartProduct",
    },
  ],
  orderHistory: [
    {
      type: mongoose.Schema.ObjectId,
      ref: "oreder",
    }
  ],
  forgot_password_otp : {
    type : String,
    default : null
  },
  forgot_password_expire : { 
    type : Date,
    default : null
  },
  role : {
    type : String,
    enum : ["ADMIN", "USER"],
    default : "USER"
  }
},{
    timestamps : true
});

const UserModel = mongoose.model("User", userSchema);

export default UserModel;
