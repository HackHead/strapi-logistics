FROM node:18.16.0

# Set the working directory for the Strapi application
WORKDIR /app/strapi

# Copy the package.json and package-lock.json files for the Strapi application
COPY ./strapi-app/package.json ./

# Install dependencies for the Strapi application
RUN npm cache clean --force
RUN rm -rf node_modules
RUN yarn install --force



# Copy the rest of the application files for the Strapi application
COPY ./strapi-app .
COPY ./strapi-app/.env.example ./.env

# Start the Strapi application
CMD ["npm", "start"]
