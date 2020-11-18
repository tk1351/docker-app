FROM node:12

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app
RUN yarn install

COPY ./frontend .

EXPOSE 3000

CMD yarn start