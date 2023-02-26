import express from "express"
import cors from "cors";
// const mysqlAdmin = require('node-mysql-admin');
const dotenv = require('dotenv');
dotenv.config()

const PORT = process.env.PORT || 3000;
const app = express()

const corsOptions = {
  origin: process.env.CORS_ORIGIN?.split(',')
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
routes.documents(app);
routes.purchase(app);

app.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

// app.use(mysqlAdmin(app));

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})