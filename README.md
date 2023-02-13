wip
# Trilla
[![screenshot](https://github.com/taxbit/trilla/blob/master/images/screen.png?raw=true)]()

## Installation

Trilla requires [Node.js](https://nodejs.org/) v18+ to run.

Install the dependencies and devDependencies.

```sh
cd backend
npm i
cd ../frontend
npm i
```

## Database and Sequelize

Running Migrations and Seeds
```sh
cd backend/src
npx sequelize-cli db:migrate
npx sequelize-cli db:seed:all
```
This will execute seed file and a demo and admin users will be inserted into the User table.

## Docker
```sh
make up
```
This will create the images, pull in the necessary dependencies and run backend node server.

## License
MIT