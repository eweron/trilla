import db from "../models";
const Counterparty = db.Counterparty;
const Order = db.Order;

function all(req: any, res: any): void {
    Counterparty.findAll({
        include: [{
            model: Order
        }],
    })
      .then((counterparties: any) => {
        if (!counterparties) {
          return res.status(404).send({ message: "Counterparties Not found." });
        }
        res.status(200).send(counterparties);
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
};

function create(req: any, res: any): void {
  const { name, taxId, description, address, email, phone } = req.body
  Counterparty.create({
    name, taxId, description, address, email, phone 
  })
    .then((counterparty: any) => {
      res.status(200).send(counterparty);
    })
    .catch((err: any) => {
      res.status(500).send({ message: err.message });
    });    
}

const counterpartiesController = {
  all, create
}

export default counterpartiesController