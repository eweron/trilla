import authJwt from "../middlewares/auth";
import documentsController from "../controllers/document"

export default function(app: any) {
  app.use(function(req: any, res: any, next: any) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/currency/all",
    [authJwt.verifyToken],
    documentsController.allCurrencies
  );

  app.get(
    "/api/invoice/all",
    [authJwt.verifyToken],
    documentsController.all
  );

  app.get(
    "/api/invoice/by_order",
    [authJwt.verifyToken],
    documentsController.invoiceByOrder
  );

  app.post(
    "/api/invoice/new",
    [authJwt.verifyToken],
    documentsController.createInvoice
  );
};