FROM node:20.11.0 AS builder

# Create & set working directory
WORKDIR /home/node/website

# Copy package.json file
COPY package*.json ./

# Install all dependencies (including dev dependencies)
RUN npm install

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:20.11.0

WORKDIR /home/node/website

# Copy package.json file
COPY package*.json ./

# Install only production dependencies
RUN npm install --omit=dev

# Copy built files from builder stage
COPY --from=builder /home/node/website/dist ./dist

ENV HOST=0.0.0.0 PORT=80

EXPOSE ${PORT}
CMD [ "npm", "run", "start" ]