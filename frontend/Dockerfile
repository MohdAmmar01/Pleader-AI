# Base image
FROM node:14-bullseye-slim AS builder

# Set working directory
WORKDIR /usr/src/app

# Copy app dependencies
COPY . .

# Install app dependencies
RUN npm install

# Copy app source code
COPY . .

# Build the Angular app
RUN npm run build

# Use Nginx to serve the built Angular app
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

# Copy the Nginx configuration file to the container
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
