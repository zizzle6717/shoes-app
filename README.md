# shoes-app
Demo App

## Getting Started (Dev Environment)

1. Install Docker [https://www.docker.com/products/container-runtime]
2. Clone the Repo [https://github.com/zizzle6717/shoes-app.git]
3. `npm install` in the root directory
4. Install Postres and Redis locally
    * Optionally use the included docker run scripts in the package.json
    * ie. In a separate terminal `npm run docker:run:redis`
    * ie. In another separate terminal `npm run docker:run:postgres`
5. Create a local .env file `npm run copy:env`
    * Update the newly created .env file with your local environment variables
6. Startup Commands
    1. `npm run init` (This will generate documentations and populate the database with tables and a few records)
    2. `npm run build:watch` (watches files for changes and hot module reloads)
    3. In yet another terminal run `npm start`
7. If running postgres/redis with docker, you setup should look like...
![Terminal Setup](https://github.com/zizzle6717/shoes-app/blob/master/docs/dev-terminal.png)

## Documentation
Swagger documentation can be found by visiting `http://localhost:7000/docs/`. Replace with the port from you local environment variables.

## Healthcheck endpoint
`http://localhost:7000/_healthz`

## Monitoring
Real-time metrics can be found by visiting `http://localhost:7000/appmetrics-dash/`