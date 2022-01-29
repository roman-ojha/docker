/*
    -> to create a dockerize nodejs application we have to create a 'Dockerfile' inside the root directory of nodejs app

    -> after completing the docker file we will use this command:
        -> docker build -t node-docker-tutorial .
        -> to build the docker image '-t' to spacify the name of our docker image 'node-docker-tutorial' is the name of our image
        -> docker build -t node-docker-tutorial:<verison_number> .
        
    -> now from that docker image we can then start to spin up containers using:
        -> docker run -it -p 9000:8080 node-docker-tutorial
            -> how we have to run the image so:
            -> '-it' to interact to terminal 
            -> '-p' to spacify the port that it's runs on 
            -> 9000:8080 (we know that our application is running on port 8080 that will be port 8080 within our docker container so we need to map that to a free port on our local machine, so here we are spacifying 9000 which we want to map to internal port 8080)
            -> 'node-docker-tutorial' (spacify the image that we want to run)

    -> if we want to run this docker container in the background then:
        -> docker run -d 9000:8080 node-docker-tutorial
            -> '-d' to run in a detached mode
            -> '9000:8080' (again 9000 to 8080 maping)

    -> now we have completed to dockerize the nodejs application but when we will make change to the source code we have to again start image to optimize the process we can use nodemon
        -> firstly we have to install nodemon as the dependencies:
            -> npm i --save nodemon
                -> so that docker container will then have access to that package
            -> docker run -it -p 9000:8080 -v ${pwd}:/app node-docker-tutorial
                -> '-v' volume flag
                -> ${pwd} (current working directory)
                -> '/app' docker directory
                -> "-v ${pwd}:/app" (is explain in depth in docker-compose.yml)
    
    -> Conclusion: Now this nodejs application works on any system which had installed docker 

    
    => using docke-compose.yml
        -> create docker-compose.ymal
        -> in package.json:
            -> "docker-compose-down": "docker-compose -f './docker-compose.yml' down",
                -> this is the script that is use to close down the container shutdown the container
            -> "docker-compose-up:dev": "docker-compose -f './docker-compose.yml up -d --build api-dev",
                -> this is the script that will build our container
            -> "docker:dev": "num run docker-compose-down; npm run docker-compose-up:dev; docker-compose logs -f api-dev"
                -> this script will run the docker container and also we want to spacify to view the logs of the container
*/

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, () => {
  console.log(`Running on ${port}`);
});
