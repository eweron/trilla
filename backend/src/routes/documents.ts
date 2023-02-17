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
    "/api/invoice/all",
    [authJwt.verifyToken],
    documentsController.all
  );

//   app.post(
//     "/api/order/new",
//     [authJwt.verifyToken],
//     ordersController.create
//   );
};