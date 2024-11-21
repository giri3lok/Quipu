# Use the official Node.js image as the base
FROM node:23-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./
COPY package-lock*.json ./
# Clear npm cache (optional but can help with clean installs)
RUN npm cache clean --force

COPY . .

EXPOSE 3000


# Install project dependencies
RUN npm install --legacy-peer-deps

# Install Playwright browsers and their dependencies
RUN npx playwright install

# Install Allure CLI globally
RUN npm install --save-dev allure-commandline --legacy-peer-deps

# Run CodeceptJS tests and generate Allure report, even if tests fail
CMD ["sh", "-c", "npm run codeceptjs || true && npx allure generate ./output/allure-results --clean -o ./output/allure-report"]

# Default command to keep the container running (optional)
CMD ["tail", "-f", "/dev/null"]