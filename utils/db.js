import mongoose from "mongoose";

const connectMongo = async () => {
  if (mongoose.connection[0].readyState) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Mongoose Connection successfully established.");
  } catch (error) {
    throw new Error("Error connection Mongoose");
  }
};

export default connectMongo;
