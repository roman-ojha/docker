FROM node:14.17.0

WORKDIR /user/src/app

COPY package*.json ./
# we want to copy 'package-lock.json' & 'package.json' file to the working directory

RUN npm install
# to install all the dependencies

COPY . .
# copy all thing that is available to the project directory into container

EXPOSE 3000
# where application run's on

CMD ["npm","start"]
# run the application
