# DEVOPS PROJECT

This is our Devops project that we managed to do after learning diferent tools during the semester. 

# Authors 
 BENSARSA Alexandre <br>
CHAOUACHI Soraya <br>
SI INTER TD 1 <br>

# 1. Creation of a web application 

We created an application using the programming language NodeJS, and for the database where we stored the data we used Redis. <br>
Also, we have configured ther server and the application to be able to run on the port 3000.  <br>
After that, we covered the application with diferent test of diferent levels, in total we had 12 tests. <br>
All the test are functioning and we had respectivelly : <br>

[capture]

-> one test for Redis connection 
This first test is checking the application's ability to perform the connection with Redis database but also
the interaction to it. <br>
This test tipically involves connecting to Redis server, performing read/write operation and disconnecting. 
<br>

-> two tests for the configuration <br>
This test concerns to ensure the correct configuration of the application and the environment the application is running in. <br>   
- for the environement configuration test we are checking environment variables, server setting and that all the files are loaded, in our case the load of JSON configuration file and also the load of custom configuration.  <br>  
- for the dependency configuration test its goal is to ensure that the application can correctly access and utilize its dependecies.  
<br>

-> four tests for the user REST API <br>
Those four tests are focusing on the user and most specifically on REST API endpoints. <br> 
This test can be declined into four  tests: <br> 
- The first one POST/user will create a new user by sending a POST request to the /user endpoints with the necessary parameters to create a new user. <br>
- The second one also POST/user will validates API's error handling by intentionnaly sending incorrect parameters to the POST. <br>
- The thrid one will concern GET/user and will ensure teh 'Read Operation' by requesting user information<br> 
- The last one will be similar to the POST test by checking the API hndlor's error for GET requests and this by sending  the GET request to /user endpoint with incorrect query parameters. <br>


-> five tests using CRUD methods for the user <br>
 CRUD stands for Create, Read, Update, and Delete. Thus, the five tests that uses CRUD methods are most of<br>
 them the basic operations that can be performed on the user data in the application. <br>

1. Create test testing if we can create a new user into our system <br>
2. Read test testing that the system can retrieve user information and thus by passing wrong user parameters. <br> 
3. The third test's goal is to avoid creating an existing user. <br>
4. This one is to be able to get a user by its username. <br> 
5. The last one is to test getting a user when it does not exist. <br>



# 2. Application of CI/CD pipeline 

Here we are choosing to apply continuous integration and continuous delivery/deployment pipeline using Azure pipeline. <br>
The deployment through Azure pipelines has been setup and rigorously tested. The screenshots illustrates the <br> successful execution of various tests. Validating every test, every commit that represent an integral <br>part of our CI/CD process is very important to ensure the stability and the functionality of our application. <br> 

Indeed, Azure pipeline present diferent advantages as Scalability, Integrated Environment, Flexibility and <br>
control and en Enchanced security.<br>

[capture 1] <br>
We can here notice a cloud servies platform that shows : <br>
- Azure Cache for Redis: which represents a cache for redis that enhances the performance of the application.<br>
- Ressource Group corresponds to a container that holds ressources for an Azure solution. <br>
- App Service: a platform for building, deploying and scaling web applications. <br> 

[capture 2]

Here we can notice that our AppService is currently running which means that our web application is <br>
accessible. <br> 

Here is the link to our node js file that made possible the continuous integration https://github.com/<br> alexben300502/starrr/blob/main/.github/workflows/node.js.yml <br>

And here's the link that made possible the delivery and the deployment on Azure pipeline. <br>
https://github.com/al exben300502/starrr/blob/main/.github/workflows/main_starrr-devops-project.yml <br>

And here we can notice that our web application is deployed on Azure and visible at [ADD LIEN]. 


# 4. Build Docker image of your application

For this part of the project after creating a dockerignore and a docker file we build the docker image. <br>
We managed to push it on our dockerhub with login using respectively docker build -t devopsproject and <br>
docker push alexben3005/project-image:latest

[capture]
Here, we can see a docker Hub repository page.<br>
The repository name alexben3005/userapi represents the unique identifier for the Docker image on Docker Hub.<br>
So the presence of the repository and the "Last pushed" means that we had a built that occurred and that <br>
the image has been successfully uploaded to Docker Hub. <br>












# 5  Make container orchestration using Docker Compose 

To be able to containerize our development workflow, we have employed Docker compose it is a tool that is<br>
able to run multiple-container Docker application. Indeed, we are able in single file to configure our <br>
application services, networks and volumes. <br>


In this part of our project, we will be creating a  docker-compose.yml (mettre le lien) to start the <br>
application. <br> 

Our docker-compose.yml defines two services: <br>
- web application service: it is setting up the correct envrionement for the web server to run. <br>
- redis service utilizes the Redis image from Docker hub. <br>

To start the docker-compose file we have just created we managed to do it with docker-compose up to be able
<br>
 to run it into the container we have just created. <br>

Now we are going to use the software postman which is a tool for testing  and interacting with application<br>
programming interfaces. <br> 

[capture 1]
Also, as we can see on the image, the terminal indicates the successful creation of various components <br>
that represents basic elements in a containerized application; such as network, volume, and containers.

[capture 2]
Here we can notice from the terminal that we have a cintainer creation, redis that is starting, also server inizalization with redis server that is listening on port 6379. Finally we can notice that the server finished its initialisation and will be from now ready to accept connections over TCP.

[capture 3]
Here we see that Node.js application is starting and we notice that the server is listening to port 3000<br>.


After that we check the application on http://localhost:3000/ and we can see that the print of "Hello World!"
<br> is successful. 

[capture 4]


