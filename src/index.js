import app from "./app.js";
import { connectDb } from "./db.js";

connectDb();

app.listen(8080);
console.log(">>> Servidor Corriendo en el Puerto:", 8080);
