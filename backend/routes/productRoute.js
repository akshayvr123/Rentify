const express=require('express')
const {addProduct,  getCategory, getAllProduct}=require('../controllers/productController')


const router=express.Router()

router.route('/').post(addProduct)
// router.route('/categorynames').get(getCategoryNames)
router.route('/').get(getCategory)
router.route('/allproduct').get(getAllProduct)




module.exports =router