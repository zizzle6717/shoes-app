FROM node:12.14.0
WORKDIR /app
COPY ./package.json ./
RUN npm install
COPY . .
RUN npm run generate:docs && \
  npm run copy:env && \
  npm run build
CMD ["npm", "run", "start"]