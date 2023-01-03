import db from "../models";
const User = db.User;

function all(req: any, res: any): void {
  User.findAll()
      .then((users: any) => {
        if (!users) {
          return res.status(404).send({ message: "Users Not found." });
        }
        res.status(200).send(users);
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
};

const userController = {
  all,
}

export default userController