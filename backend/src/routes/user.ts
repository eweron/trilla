import authJwt from "../middlewares/auth";
import userController from "../controllers/user"

export default function(app: any) {
  app.use(function(req: any, res: any, next: any) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/user/all",
    [authJwt.verifyToken],
    userController.all
  );
};