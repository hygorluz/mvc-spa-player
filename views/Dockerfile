FROM node:18-alpine

# Add a work directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Cache and Install dependencies
COPY package.json .
RUN npm install

# Copy app files
COPY . .

# Expose port
EXPOSE 3000

# Start the app
RUN NODE_OPTIONS=--openssl-legacy-provider
CMD [ "npm", "start" ]