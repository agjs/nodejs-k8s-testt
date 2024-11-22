# Use the official Node.js base image (LTS version) # trigger
FROM node:latest

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
# This helps in caching the 'npm install' step for faster builds when dependencies haven't changed
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will listen on
EXPOSE 3000

# Command to run the application
CMD ["node", "app.js"]
