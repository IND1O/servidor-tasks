import app from "./app.js";
import { connectDb } from "./db.js";

connectDb();

const port = process.env.port || 4000;

app.listen(port, "0.0.0.0", () => {
  console.log(`>>> Servidor Corriendo en el Puerto: ${port}`);
});
//console.log(">>> Servidor Corriendo en el Puerto:", 8080);
