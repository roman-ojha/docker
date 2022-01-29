# here we have to spacify the base image that we wish to base our docker image from
# FROM node:9-slim
# here we are using the 'node' image and '9-slim' as the tag
FROM node:14
# here 14 is the version that we want to use

WORKDIR /app
# this will dictate exactily where all of our application code will go and any subsequent commands we run within a docker file will run within this directory

COPY package*.json ./

# next we want to copy our package.json into our app directory
#NOTE: here we are not copying all of our applications source file into the application directory right now is so that we can cache these steps so, docker can handle the building of our images, now if we do this then we can cache these steps so, every time we make a change and rebuild our application and our docker file we don't have to run through these steps again, so we don't have to again install all those package dependencies

RUN npm install
# SHELL FORM
# once we've got the package.json, we want to run the NPM install command

# COPY . /app
COPY . .
# now we've got our application dependencies all installed, we then need to copy our application source files to the app directory 
# NOTE: so now are are just copying the source file where nodemoudles had already in the docker cache now only this that update is source file
# it will copy all the node_modules as well for that we have to include 'node_modules' inside the '.dockerignore'

ENV PORT=8080
# to run our code we will use a environment variable 

EXPOSE 8080

# CMD ["npm","start"]
CMD ["npm","start"] 
# EXEC FORM
# Now we have to call the command
