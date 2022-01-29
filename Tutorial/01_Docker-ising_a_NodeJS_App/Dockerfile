# here we have to spacify the base image that we wish to base our docker image from
# FROM node:9-slim
# here we are using the 'node' image and '9-slim' as the tag
FROM node:14
# here 14 is the version that we want to use

WORKDIR /app
# this will dictate exactily where all of our application code will go and any subsequent commands we run within a docker file will run within this directory

COPY package.json /app

# next we want to copy our package.json into our app directory
#NOTE: here we are not copying all of our applications source file into the application directory right now is so that we can cache these steps so, docker can handle the building of our images, now if we do this then we can cache these steps so, every time we make a change and rebuild our application and our docker file we don't have to run through these steps again

RUN npm install
# once we've got the package.json, we want to run the NPM install command

COPY . /app
# now we've got our application dependencies all installed, we then need to copy our application source files to the app directory 

# CMD ["npm","start"]
# Now we have to call the command
