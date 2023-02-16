import authJwt from "../middlewares/auth";
import ordersController from "../controllers/order"

export default function(app: any) {
  app.use(function(req: any, res: any, next: any) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/order/all",
    [authJwt.verifyToken],
    ordersController.all
  );

  app.post(
    "/api/order/new",
    [authJwt.verifyToken],
    ordersController.create
  );
};