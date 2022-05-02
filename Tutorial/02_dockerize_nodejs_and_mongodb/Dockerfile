FROM node:alpine
# using alpine is most sutable for n number of application

WORKDIR /user/src/app
# this is where our application would running from

COPY package*.json ./
# we want to copy 'package-lock.json' & 'package.json' file to the working directory

# RUN npm install
# to install all the dependencies
# OR:
RUN npm ci
# we want to install the exact same dependencies that are running locally on our system
# ci (contineous integration)


COPY . .
# copy all thing that is available to the project directory into working directory

EXPOSE 3000
# where application run's on

CMD ["npm","start"]
# run the application
