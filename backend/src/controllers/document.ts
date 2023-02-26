import db from "../models";
const Invoice = db.Invoice;

function all(req: any, res: any): void {
    Invoice.findAll({
        include: [{
            model: db.Order,
            include: ['Seller', 'Customer']
        }],
    })
      .then((invoices: any) => {
        if (!invoices) {
          return res.status(404).send({ message: "Invoices Not found." });
        }
        res.status(200).send(invoices);
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
};

function by_order(req: any, res: any): void {  
    Invoice.findAll({ where: { orderId: req.query.id } })
      .then((invoices: any) => {
        if (!invoices) {
          return res.status(404).send({ message: "Invoices Not found." });
        }
        res.status(200).send(invoices);
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
};

function create(req: any, res: any): void {
//   Order.create({
//     number: req.body.number,
//     status: req.body.status || 'new',
//     discription: req.body.discription,
//     seller: req.body.seller,
//     customer: req.body.customer,
//     carrier: req.body.carrier,
//   })
//     .then((order: any) => {
//       res.status(200).send(order);
//     })
//     .catch((err: any) => {
//       res.status(500).send({ message: err.message });
//     });    
}

const documentsController = {
  all, create, by_order
}

export default documentsController