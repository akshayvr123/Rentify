const express=require('express')
const {addProduct,  getCategory}=require('../controllers/productController')


const router=express.Router()

router.route('/').post(addProduct)
// router.route('/categorynames').get(getCategoryNames)
router.route('/').get(getCategory)




module.exports =router