import db from "../models";
const Order = db.Order;

function all(req: any, res: any): void {
    Order.findAll()
      .then((orders: any) => {
        if (!orders) {
          return res.status(404).send({ message: "Orders Not found." });
        }
        res.status(200).send(orders);
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
};

const ordersController = {
  all,
}

export default ordersController