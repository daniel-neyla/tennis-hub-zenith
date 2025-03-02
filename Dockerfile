# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install --save-dev @types/react @types/react-dom


# Copy the rest of the application code to the working directory
COPY . .

# Build the application
RUN npm run build

# Set environment variable for the port
ENV VITE_PORT=3000


# Expose the port the app runs on
EXPOSE 3000

# Set environment variable to bind to all network interfaces
ENV HOST 0.0.0.0

# Define the command to run the app
CMD ["npm", "run", "dev"]