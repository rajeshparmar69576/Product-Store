import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.Mongo_URI)
        console.log(`MongoDB connected successfully...`)
    }catch(error){
        console.log(`Error: ${error.message}`)
        process.exit(1);
    }
}