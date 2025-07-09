import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        // console.log("url", process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`mongoDb Conneted: ${conn.connection.host}`);

    } catch (error) {
        console.log("error connecting", error.message)
        process.exit(1) // failure (0 for success)
        }
}