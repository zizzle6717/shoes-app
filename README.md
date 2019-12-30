# shoes-app
[![Build Status](https://travis-ci.org/zizzle6717/shoes-app.svg?branch=master)](https://travis-ci.org/zizzle6717/shoes-app)

This is a demo microservice with products, shoes, and reviews for sample data.

## Getting Started

1. Install Docker [https://www.docker.com/products/container-runtime]
2. Clone the Repo [https://github.com/zizzle6717/shoes-app.git]
3. Create a local .env file and verify node version with `npm run env:init`
    * Update the newly created .env file with your local environment variables
4. `npm install` in the root directory

### Setup Dev Environment w/ Docker
5. Install Postres and Redis locally
* Optionally use the included docker run scripts in the package.json
* ie. In a separate terminal `npm run docker:run:redis`
* ie. In another separate terminal `npm run docker:run:postgres`
6. Startup Commands
    1. `npm run init` (This will generate documentations and populate the database with tables and a few records)
    2. `npm run build:watch` (watches files for changes and hot module reloads)
    3. In yet another terminal run `npm start`
7. If running postgres/redis with docker, your setup might look like this...
![Terminal Setup](https://github.com/zizzle6717/shoes-app/blob/master/docs/dev-terminal.png)
Hot module reloading is configured to restart the app each time a file change is saved.

### Setup Dev Environment w/ Kubernetes & Skaffold
Assuming you have kubectl installed on your local machine along with minikube or docker-desktop, run the following to commands...

5. Apply the mandatory ingress-nginx config. `kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/master/deploy/static/mandatory.yaml` (https://kubernetes.github.io/ingress-nginx/deploy/#prerequisite-generic-deployment-command)
6. Apply the config files from `/k8s` with `kubectl apply -f k8s`

TODO: Configure Skaffold

## Documentation
Swagger documentation can be found by visiting `http://localhost:7000/docs/`. Replace with the port from you local environment variables.

## Test Coverage
Run all tests with `npm run test`. Also run unit tests only with `npm run test:unit` or integration tests only with `npm run test:integ`.
Coverage can then be found by visiting `http://localhost:7000/coverage/`

## Healthcheck endpoint
Use this endpoint to check that the service is running `http://localhost:7000/_healthz`

## Monitoring
Real-time metrics can be found by visiting `http://localhost:7000/appmetrics-dash/`

## Logging
Logging can be configured by setting the appropriate environment variables in the `.env` file.
To view logs locally in the console, set `LOGGING_HOST=console` and set the log level such as `LOGGING_LEVEL=info`.
For production or logging with a pre-production instance, `LOGGING_HOST` should be the elastic search client node.

## Build Pipeline and Deployment (w/ TravisCI, Docker, and Kubernetes)
Github is configured to build and test each time changes are committed and pushed.
Modify the included `.travis.yml` to reconfigure.