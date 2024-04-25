const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  // Embed products within the category
  products: [{
    username:{
     type:String,
     required:true
    },
    name: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      trim: true
    },
    price: {
      type: Number,
      required: true,
      min: 0.01
    },
    phone:{
      type:Number,
      required:true,
    },
    location:{
      type:String,
      required:true
    },
    image: {
      type: String,
      required:true,
      trim: true
    },
   
  }]
});

module.exports = mongoose.model('Product', productSchema);