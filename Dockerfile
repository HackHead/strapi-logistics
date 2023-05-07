FROM node:18.16.0

# Set the working directory for the Strapi application
WORKDIR /app/strapi

# Copy the package.json and package-lock.json files for the Strapi application
COPY ./strapi-app/package*.json ./

# Install dependencies for the Strapi application
RUN npm install --no-optional

# Copy the rest of the application files for the Strapi application
COPY ./strapi-app .

# Start the Strapi application
CMD ["npm", "start"]

# Create a new stage for the Next.js application
FROM node:18.16.0

# Set the working directory for the Next.js application
WORKDIR /app/client

# Copy the package.json and package-lock.json files for the Next.js application
COPY ./client/package*.json ./

# Install dependencies for the Next.js application
RUN npm install --no-optional

# Copy the rest of the application files for the Next.js application
COPY ./client .

# Build the Next.js application
RUN npm run build

# Start the Next.js application
CMD ["npm", "start"]
