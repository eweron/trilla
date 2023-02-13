import express from "express"
import cors from "cors";

const PORT = process.env.PORT || 3000;
const app = express()

var corsOptions = {
  origin: ["http://localhost:5173"]
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


import db from "./models"
db.sequelize.sync()
.then(()=>console.log('DB connection sucessful.'))
.catch((err: any)=> console.log('error has occured', err));

import routes from "./routes"
routes.auth(app);
routes.user(app);
routes.counterparty(app);
routes.order(app);

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})