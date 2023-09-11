import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://indiodev73:Admin123456@cluster0.nkjo3bn.mongodb.net/merndb"
    );
    console.log(">>> DB Conectada");
  } catch (error) {
    console.log(error);
  }
};
