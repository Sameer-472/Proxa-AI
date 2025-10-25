import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        console.log("MongoDB connected Successfully");
    } catch (error) {
        console.log("MongoDB Connection failed", error);
        process.exit(1)
    }
}