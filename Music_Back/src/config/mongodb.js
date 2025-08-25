import mongoose, { connect }  from "mongoose";
const connectDB  = async ()=>{
    mongoose.connection.on("connected",()=>{
        console.log("connection established")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/Music_Streaming`);
    console.log("connection established");

}
export default connectDB;
