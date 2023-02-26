import db from "../models";
const Purchase = db.Purchase;

function all(req: any, res: any): void {
    Purchase.findAll()
      .then((purchases: any) => {
        if (!purchases) {
          return res.status(404).send({ message: "Purchases Not found." });
        }
        res.status(200).send(purchases);
      })
      .catch((err: any) => {
        res.status(500).send({ message: err.message });
      });
};

function create(req: any, res: any): void {
  Purchase.create({
    number: req.body.number,
    discription: req.body.discription,
    status: req.body.status || 'new',
    supplier: req.body.seller,
    customer: req.body.customer,
  })
    .then((purchase: any) => {
      res.status(200).send(purchase);
    })
    .catch((err: any) => {
      res.status(500).send({ message: err.message });
    });    
}

const purchasesController = {
  all, create
}

export default purchasesController