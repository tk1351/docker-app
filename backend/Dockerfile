FROM node:12

WORKDIR /app

COPY backend/package.json /app
COPY backend/yarn.lock /app
RUN yarn install

COPY ./backend .

EXPOSE 8080

CMD yarn start