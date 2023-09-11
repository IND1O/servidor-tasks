import app from "./app.js";
import { connectDb } from "./db.js";

connectDb();

app.listen(4000);
console.log(">>> Servidor Corriendo en el Puerto:", 4000);
