import authJwt from "../middlewares/auth";
import counterpartyController from "../controllers/counterparty"

export default function(app: any) {
  app.use(function(req: any, res: any, next: any) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/counterparty/all",
    [authJwt.verifyToken],
    counterpartyController.all
  );

  app.post(
    "/api/counterparty/new",
    [authJwt.verifyToken],
    counterpartyController.create
  );
};