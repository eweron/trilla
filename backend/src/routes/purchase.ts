import authJwt from "../middlewares/auth";
import purchasesController from "../controllers/purchase"

export default function(app: any) {
  app.use(function(req: any, res: any, next: any) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/purchase/all",
    [authJwt.verifyToken],
    purchasesController.all
  );

  app.post(
    "/api/purchase/new",
    [authJwt.verifyToken],
    purchasesController.create
  );
};