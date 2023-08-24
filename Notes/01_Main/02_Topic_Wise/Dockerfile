# Step1 Spacify the base image
FROM alpine
# first get the base image of the alpine

# download and install dependencies
RUN apk add --update redis

# Setup the Startup command
CMD ["redis-server"]