import db from "../config/db.js"

const productSchema = new db.Schema({
    product_name: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  value:{
    type:Number
  }
});

const product = db.model("product",productSchema);

export default product;