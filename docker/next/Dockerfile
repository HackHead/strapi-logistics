FROM node:18.16.0

# Set the working directory for the Next.js application
WORKDIR /app/client

# Copy the package.json and yarn.lock files for the Next.js application
COPY ./client/package.json ./
COPY ./client/yarn.lock ./

# Install dependencies for the Next.js application
RUN yarn install --force

# Copy the rest of the application files for the Next.js application
COPY ./client .

# Build the Next.js application
RUN yarn build

# Start the Next.js application
CMD ["yarn", "start"]
