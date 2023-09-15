import mongoose from "mongoose";

import { config } from "dotenv";

config();

export const connectDb = async () => {
  try {
    await mongoose.connect(process.env.DB_MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(">>> Base de Datos >Conectada<");
  } catch (error) {
    console.log(error);
  }
};
