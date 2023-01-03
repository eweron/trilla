import jwt from "jsonwebtoken";
import db from "../models";
import * as dotenv from 'dotenv'
dotenv.config()
const { NODE_ENV, JWT_SECRET } = process.env;

const User = db.User;

const verifyToken = (req: any, res: any, next: any) => {
  let token = req.headers["x-access-token"];

  if (!token) {
    return res.status(403).send({
      message: "No token provided!"
    });
  }
  const secret = NODE_ENV === 'production' && JWT_SECRET || 'some-secret-key'
  
  jwt.verify(token, secret, async (err: any, decoded: any) => {
    if (err) {
      return res.status(401).send({
        message: "Unauthorized!"
      });
    }
    req.userId = decoded.id;
    const user = await User.findByPk(decoded.id)
    next();
  });
};

const authJwt = {
    verifyToken,
  };
  
  export default authJwt