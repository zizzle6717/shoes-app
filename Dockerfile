FROM node:12.14.0

ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

WORKDIR /app
COPY ./package*.json ./
# Install dev dependencies to allow building with webpack
RUN  npm ci --only=production --no-optional && npm i --only=development --no-optional
COPY . .
RUN npm run generate:docs && \
  npm run build
CMD ["npm", "run", "start"]