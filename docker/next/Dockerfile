# Use the Node.js version 18.16.0 as the base image
FROM node:18.16.0

# Set the working directory for the Next.js application
WORKDIR /app/client

# Copy the package.json and yarn.lock files to the working directory
COPY ./client/package.json ./package.json
COPY ./client/yarn.lock ./yarn.lock

# Install dependencies for the Next.js application
RUN yarn install --force

# Copy the rest of the application files to the working directory
COPY ./client/ .

# Build the Next.js application
RUN yarn build

# Set the command to start the Next.js application
CMD ["yarn", "start"]
