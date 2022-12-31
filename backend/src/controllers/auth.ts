import db from "../models";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import dotenv from 'dotenv'
dotenv.config()
const { NODE_ENV, JWT_SECRET } = process.env;
const secret = NODE_ENV === 'production' && JWT_SECRET || 'some-secret-key'

const User = db.User;

const signin = (req: any, res: any) => {
  User.findOne({
    where: {
      username: req.body.username
    },
  })
    .then((user: any) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!"
        });
      }

      var token = jwt.sign({ id: user.id }, secret, {
        expiresIn: 1086400
      });

      res.status(200).send({
        id: user.id,
        username: user.username,
        email: user.email,
        accessToken: token
      });

    })
    .catch((err:any) => {
      res.status(500).send({ message: err.message });
    });
};

export default { signin }