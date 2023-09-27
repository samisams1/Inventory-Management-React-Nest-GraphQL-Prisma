# Use a base image with Node.js pre-installed
FROM node:16.17.1-alpine

# Set the working directory inside the container
WORKDIR /user/src/app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port that the application will listen on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:prod"]