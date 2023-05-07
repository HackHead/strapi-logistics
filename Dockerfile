FROM node:18.16.0

# Set the working directory inside the container
WORKDIR /app/strapi

# Copy the package.json file
COPY ./strapi-app/package.json .

# Install Node.js and npm
RUN apt-get update && apt-get install -y npm

# Install dependencies
RUN npm install -g npm@9.6.6
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY ./strapi-app .

# Start the Strapi application
CMD ["npm", "start"]
