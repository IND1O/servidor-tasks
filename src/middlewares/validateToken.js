import jwt from "jsonwebtoken";
import { TOKEN_SECRET } from "../config.js";

export const authRequiered = (req, res, next) => {
  //console.log(req.headers);
  //const token = req.headers.cookie;
  const { token } = req.cookies;
  //console.log(token);
  if (!token)
    return res
      .status(401)
      .json({ message: "No hay token, no esta autorizado" });

  jwt.verify(token, TOKEN_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Token no valido" });
    //console.log(user);
    req.user = user;
    next();
  });
};
