import controller from "../controllers/auth"
import verifySignUp from "../middlewares/verify";

export default function(app: any) {
  app.use(function(req: any, res: any, next: any) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [ verifySignUp.checkDuplicateUsernameOrEmail ],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};