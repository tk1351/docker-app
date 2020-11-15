FROM node:12

WORKDIR /app

COPY frontend/package.json /app
COPY frontend/yarn.lock /app
COPY frontend/node_modules /app
RUN yarn install

COPY ./frontend .

EXPOSE 3000

CMD yarn start