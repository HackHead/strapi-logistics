FROM node:18.16.0

WORKDIR /app/client

COPY ./client/package.json ./package.json
COPY ./client/yarn.lock ./yarn.lock

RUN yarn install --force

COPY ./client/ .

RUN yarn build

CMD ["yarn", "start"]
