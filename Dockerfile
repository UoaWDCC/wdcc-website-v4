# syntax = docker/dockerfile:1.4

# Adjust NODE_VERSION as desired
ARG NODE_VERSION=20.18.1
FROM node:${NODE_VERSION}-slim AS base

LABEL fly_launch_runtime="Next.js"

# Ensure required secrets are available
RUN --mount=type=secret,id=DATABASE_URI \
    cat /run/secrets/DATABASE_URI

# Print environment variables
RUN printenv

# Next.js app lives here
WORKDIR /app

# Set production environment
ENV NODE_ENV="production"

# Install pnpm
ARG PNPM_VERSION=10.6.1
RUN npm install -g pnpm@$PNPM_VERSION


# Throw-away build stage to reduce size of final image
FROM base AS build

# Install packages needed to build node modules
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

# Install node modules
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

# Copy application code
COPY . .

# Build application
RUN --mount=type=secret,id=DATABASE_URI \
    --mount=type=secret,id=PAYLOAD_SECRET \
    --mount=type=secret,id=S3_BUCKET \
    --mount=type=secret,id=S3_ACCESS_KEY_ID \
    --mount=type=secret,id=S3_SECRET_ACCESS_KEY \
    --mount=type=secret,id=S3_REGION \
    DATABASE_URI="$(cat /run/secrets/DATABASE_URI)" \
    PAYLOAD_SECRET="$(cat /run/secrets/PAYLOAD_SECRET)" \
    S3_BUCKET="$(cat /run/secrets/S3_BUCKET)" \
    S3_ACCESS_KEY_ID="$(cat /run/secrets/S3_ACCESS_KEY_ID)" \
    S3_SECRET_ACCESS_KEY="$(cat /run/secrets/S3_SECRET_ACCESS_KEY)" \
    S3_REGION="$(cat /run/secrets/S3_REGION)" \
    pnpm run build

# Remove development dependencies
RUN pnpm prune --prod


# Final stage for app image
FROM base

# Copy built application
COPY --from=build /app /app

# Print the final image file structure
RUN apt-get update -qq && \
    apt-get install tree
RUN tree -I "node_modules"

# Start the server by default, this can be overwritten at runtime
EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
