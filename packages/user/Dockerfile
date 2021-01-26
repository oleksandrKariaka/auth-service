FROM node:14-alpine

WORKDIR /user

COPY ./package.json package.json
COPY ./yarn.lock yarn.lock

RUN yarn install

COPY . .

CMD yarn start