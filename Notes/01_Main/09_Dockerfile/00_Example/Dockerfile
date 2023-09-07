# Following is the Dockerfile for Nodejs, Mongo, Mongo-Express and Express project that will interact with MongoDB
# the project is already done in '../07_Demo_Project'
FROM node:18-alpine
# Start by basing it on another image which is the environment
# Because we are running the javascript application on nodejs backend so we need a node js environment to run the javascript
# where it fetch the image from: https://hub.docker.com/_/node
ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password


# Run linux command inside the container using 'RUN' instruction
# Creating '/home/app' directory insdie the container
RUN mkdir -p /home/app

# 'COPY' execute on the HOST machine
COPY . /home/app
# Copying all the folder & files from current directory to '/home/app'

# COPY ./app /home/app
# If you want to copy './app' folder directory files


RUN cd /home/app && npm install
# Installing 'node_modules' on the project using package.json

RUN apk add --no-cache bash
# NOTE: if you will not get bash as interactive terminal we cau use this instruction which will add bash on you container

EXPOSE 3000


# Running Node server after that, we are able to run this command because Node is pre installed because of the base image
# CMD is the entrypoint command, so this is the command that we want to exucute as an entrypoint
CMD ["node","/home/app/index.js"]
# Start the app with "node /home/app/index.js"
