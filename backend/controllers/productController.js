const asyncHandler = require('express-async-handler');
const Product = require('../Models/productModel');

const addProduct = asyncHandler(async (req, res) => {
    const { name, products } = req.body;
    const { username:username1,name: name1, description: description1, price: price1,phone:phone1,location:location1, image: image1 } = products;

    if (!name  || !products) {
        res.status(400);
        throw new Error("Send all relevant fields");
    }

    let categoryExist = await Product.findOne({ name });

    if (categoryExist) {
        // const productExistsInCategory = categoryExist.products.some(product => product.name === name1);

        // if (productExistsInCategory) {
        //     throw new Error("Product already exists in this category");
        // } else {
            categoryExist.products.push({
                username:username1,
                name: name1,
                description: description1,
                price: price1,
                phone:phone1,
                location:location1,
                image: image1
            });
            await categoryExist.save(); // Save changes to the category
            res.status(201).json({
                category: categoryExist
            });
        // }
    } else {
        // If category doesn't exist, create a new one
        const newCategory = new Product({
            name,
            products: [{
                username:username1,
                name: name1,
                description: description1,
                price: price1,
                phone:phone1,
                location:location1,
                image: image1
            }]
        });
        await newCategory.save();
        res.status(201).json({
            newCategory
        });
    }
});

// const getCategoryNames=asyncHandler(async(req,res)=>{
//     try {
//         let category=await Product.find()
//         let categoryNames=category.map((cat)=>{
//             return cat.name
//         })
//         res.status(201).json({
//             categoryNames
//         })
//     } catch (error) {
//         console.log("an error occured while fectching");
//     }
   
// })

const getCategory=asyncHandler(async(req,res)=>{
    const {categoryname}=req.query
    console.log(categoryname);
    if(!categoryname){
        console.log("please send a category name");
    }
    try {
        let category=await Product.findOne({name:categoryname})
        res.status(200).json({
            category
        })
        
    } catch (error) {
        console.log("No category exist");
    }
})
const getAllProduct = asyncHandler(async (req, res) => {
    try {
      // Find all documents where the products array is not empty
      const allCategories = await Product.find({ 'products': { $exists: true, $not: { $size: 0 } } });
  
      // Flatten the products array from all categories
      const allProducts = allCategories.reduce((accumulator, category) => {
        accumulator.push(...category.products);
        return accumulator;
      }, []);
  
      // Respond with the flattened array of products
      res.status(200).json(allProducts);
    } catch (error) {
      // Handle errors
      console.error('Error retrieving products:', error);
      // Respond with an appropriate error message
      res.status(500).json({ message: 'Error retrieving products' });
    }
  });
  
  // Usage: Assuming this function is called within an Express route handler
  // The response will contain a JSON array of all products from all categories
  

module.exports = { addProduct,getCategory,getAllProduct };
