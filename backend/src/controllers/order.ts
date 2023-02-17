import db from "../models";
const Order = db.Order;

function all(req: any, res: any): void {
    Order.findAll({
      include: [
        'Supplier', 'Seller', 'Customer', {model: db.Invoice}
      ],
    })
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

function create(req: any, res: any): void {
  Order.create({
    number: req.body.number,
    status: req.body.status || 'new',
    discription: req.body.discription,
    seller: req.body.seller,
    customer: req.body.customer,
    carrier: req.body.carrier,
  })
    .then((order: any) => {
      res.status(200).send(order);
    })
    .catch((err: any) => {
      res.status(500).send({ message: err.message });
    });    
}

const ordersController = {
  all, create
}

export default ordersController