import db from "../models";
const { Invoice, Currency } = db;

function allCurrencies(req: any, res: any): void {
  Currency.findAll({
    attributes: ['id', 'name']
  })
    .then((currencies: any) => {
      if (!currencies) {
        return res.status(404).send({ message: "Currencies Not found." });
      }
      res.status(200).send(currencies);
    })
    .catch((err: any) => {
      res.status(500).send({ message: err.message });
    });
};

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

function invoiceByOrder(req: any, res: any): void {
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

function createInvoice(req: any, res: any): void {
  Invoice.create({
    number: req.body.number,
    orderId: req.body.orderId,
    purchaseId: req.body.purchaseId,
    currencyId: req.body.currencyId,
    summ: req.body.summ,
  })
    .then((invoice: any) => {
      res.status(200).send(invoice);
    })
    .catch((err: any) => {
      res.status(500).send({ message: err.message });
    });
}

const documentsController = {
  all, createInvoice, invoiceByOrder, allCurrencies
}

export default documentsController