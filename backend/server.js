const express = require('express')
const app = express()
const port = 3000
const connectDB=require('./config/db')
const userRoutes=require('./routes/userRoutes')
const productRoute=require('./routes/productRoute')
const dotenv=require('dotenv')
const cors=require('cors')

app.use(express.json());
app.get('/', (req, res) => {
  res.send('Hello World!')
})
dotenv.config()
connectDB()
app.use(cors())
app.use('/api/user',userRoutes) 
app.use('/api/product',productRoute)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})