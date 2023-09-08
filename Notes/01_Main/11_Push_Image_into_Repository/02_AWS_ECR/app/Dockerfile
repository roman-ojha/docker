FROM node:18-alpine

ENV MONGO_DB_USERNAME=admin \
    MONGO_DB_PWD=password

# RUN mkdir -p /home/app
# New version:
RUN mkdir -p /home/node-app

COPY . /home/node-app

RUN cd /home/node-app && npm install

RUN apk add --no-cache bash

EXPOSE 3000

CMD ["node","/home/node-app/index.js"]
