FROM node:18.16.0

# Set the working directory for the Strapi application
WORKDIR /app/strapi

# Copy the package.json and package-lock.json files for the Strapi application
COPY ./strapi-app/package.json ./

# Install dependencies for the Strapi application
RUN npm cache clean --force
RUN yarn install --force

# Copy the rest of the application files for the Strapi application
COPY ./strapi-app .
COPY ./strapi-app/.env.example ./.env

RUN yarn strapi configuration:restore -f dump.json
RUN yes | yarn strapi import -f export_20230508165230.tar.gz --key abc
RUN yarn strapi admin:create-user --firstname=Kai --lastname=Doe --email=chef@strapi.io --password=Gourmet1234
RUN yarn build
# Start the Strapi application
CMD ["npm", "start"]
