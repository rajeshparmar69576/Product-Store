import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import {connectDB} from './config/db.js'
import productRoutes from './routes/product.routes.js'

const app = express();
const PORT = process.env.PORT || 3000


app.use(express.json())
app.use(cors())

app.use('/api/products',productRoutes)

app.listen(PORT,()=>{
    connectDB()
    console.log(`Server started at http://localhost:${PORT}/api/products`)
})

