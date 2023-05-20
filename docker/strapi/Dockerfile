FROM node:18.16.0

WORKDIR /app/strapi

COPY ./strapi-app/package.json ./

RUN yarn install --force

COPY ./strapi-app .
COPY ./strapi-app/.env.example ./.env

RUN yarn strapi configuration:restore -f dump.json
RUN yes | yarn strapi import -f export_20230508165230.tar.gz --key abc
RUN yarn strapi admin:create-user --firstname=Kai --lastname=Doe --email=chef@strapi.io --password=Gourmet1234
RUN rm -rf .cache

RUN yarn build

CMD ["yarn", "start"]
