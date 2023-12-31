# DEVOPS PROJECT

### This is our Devops project that we managed to do after learning diferent tools during the semester. 


# Authors 
BENSARSA Alexandre <br>
CHAOUACHI Soraya <br>
SI INTER TD 1 <br>

# 1. Creation of a web application 

We created an application using the programming language NodeJS, and for the database we used Redis. We choose to go from the lab 3 and enrich all the todo parts with tests, ... <br>

Also, we have configured the server and the application to be able to run on the port 3000.  <br>
After that, we covered the application with diferent test of diferent levels, in total we had 12 tests. <br>
All the test are functioning and we had respectivelly : <br>

1. One test for Redis connection 
This first test is checking the application's ability to perform the connection with Redis database but also
the interaction to it. <br>
This test tipically involves connecting to Redis server, performing read/write operation and disconnecting. 

2. Two tests for the configuration <br>
This test concerns to ensure the correct configuration of the application and the environment the application is running in. <br>   
- For the environement configuration test we are checking environment variables, server setting and that all the files are loaded, in our case the load of JSON configuration file and also the load of custom configuration.  <br>  
- For the dependency configuration test its goal is to ensure that the application can correctly access and utilize its dependecies.  

3. Four tests for the user REST API <br>
Those four tests are focusing on the user and most specifically on REST API endpoints. <br> 
This test can be declined into four  tests: <br> 
- The first one POST/user will create a new user by sending a POST request to the /user endpoints with the necessary parameters to create a new user. <br>
- The second one also POST/user will validates API's error handling by intentionnaly sending incorrect parameters to the POST. <br>
- The thrid one will concern GET/user and will ensure the 'Read Operation' by requesting user information.<br> 
- The last one will be similar to the POST test by checking the API handlor's error for GET requests and this by sending the GET request to /user endpoint with incorrect query parameters. 

4. Five tests using CRUD methods for the user <br>
 CRUD stands for Create, Read, Update, and Delete. Thus, the five tests that uses CRUD methods are most of<br>
 them the basic operations that can be performed on the user data in the application. <br>

-  Create test => testing if we can create a new user into our system <br>
-  Read test => testing that the system can retrieve user information and thus by passing wrong user parameters. <br> 
-  The third test's goal is to avoid creating an existing user. <br>
-  This one is to be able to get a user by its username. <br> 
-  The last one is to test getting a user when it does not exist. <br>

![Image1](images/Image1.png)


# 2. Application of CI/CD pipeline 

Here we are choosing to apply continuous integration and continuous delivery/deployment pipeline using Azure pipeline. <br> The file that was configured for this part is the following one : [project.yml](https://github.com/alexben300502/starrr/blob/main/.github/workflows/main_starrr-devops-project.yml) . <br>

The deployment through Azure pipelines has been setup and rigorously tested. The screenshots illustrates the successful execution of various tests. Validating every test, every commit that represents an integral part of our CI/CD process is very important to ensure the stability and the functionality of our application. <br> 

Indeed, Azure pipeline present diferent advantages as Scalability, Integrated Environment, Flexibility control and en Enchanced security.<br>

We can here notice a cloud servies platform that shows : <br>
- Azure Cache for Redis: which represents a cache for redis that enhances the performance of the application.<br>
- Ressource Group corresponds to a container that holds ressources for an Azure solution. <br>
- App Service: a platform for building, deploying and scaling web applications. <br> 

![Image2](images/Image2.png) <br>

Here we can notice that our AppService is currently running which means that our web application is well deployed. <br>

![Image3](images/Image3.png)

Here is the link to our node js [file](https://github.com/alexben300502/starrr/blob/main/.github/workflows/node.js.yml) that made possible the continuous integration. <br>

And here's the link of the [file](https://github.com/alexben300502/starrr/blob/main/.github/workflows/main_starrr-devops-project.yml) that made possible the continuous deployment on Azure pipeline :
<br>

And here we can notice that our web application is deployed on Azure and visible at https://starrr-devops-project.azurewebsites.net/. <br> And we can see that it is working : 

![Image45](images/Image45.png)


# 3. Configure and provision a virtual environment and run application using the IaC approach

For this part, the goal is to configure a VM for testing and launching our application in a VM centos from the redhat family, thanks to Vagrant. We will be doing that in a folder [iac](https://github.com/alexben300502/starrr/tree/main/iac).

## Creation of Vagrant file (creating and access the Vm)

Firstly, we create a [vagrantfile](https://github.com/alexben300502/starrr/blob/main/iac/Vagrantfile)

In it, as you can see thanks to the comments, we configure the VM, and how it will work. Thanks to this vagrantFile, we are able to enter the VM through Windows as you can see in the following picture : 

```
vagrant up 
#or 
vagrant up --provision #if we made changes we run this command
```

Once we are inside the VM, we run the following command : 

```
vagrant ssh
```

![Image9](images/Image9.png)


We had many troubles to access the Vm due to ssh key access, so we had to disable the automatic injection of instable key made by Vagrant.

## Configuring our application (node and redis installation, health checks)

After that, we configured playbook with a [run.yml](https://github.com/alexben300502/starrr/blob/main/iac/Vagrantfile) that will run the roles and tasks, and 2 main.yml files : one for installing all dependencies and another for health checks. As you can see in this [playbook](https://github.com/alexben300502/starrr/tree/main/iac/playbooks)

After all that is good, we can run many checks inside the VM to see that our application work : 

![Image10](images/Image10.png)

In this image we can see that all installations, enable and installing app are working. <br>

Then we test our installation : 

![Image11](images/Image11.png)
![Image12](images/Image12.png)

Here we can see that Node and redis are well installed inside the VM centos.<br>

And on this final picture we were able to perform the check of the installation and the healthchecks that means that the application is well installed and healthy inside the VM : 

![Image13](images/Image12.png)

# 4. Build Docker image of your application

For this part of the project, after creating a dockerignore and a docker file, we build the docker image with the following command : <br>

```
docker build -t userapi
```

We managed to push it on our dockerhub with login using : 

```
docker push alexben3005/project-image:latest
```

![Image4](images/Image4.png)

<br>
Here, we can see the docker Hub repository page, that shows the push worked .<br>

Thanks to that, Kubernetes will be able to use Docker images to create containers. The images will thus represent the application environment. This ensures that the application run the same way in all kind of possible environments.


# 5.  Make container orchestration using Docker Compose 

To be able to containerize our development workflow, we have employed Docker compose, it is a tool that is able to run multiple-container Docker application. <br>
Indeed, we are able in a single file, [docker-compose.yml](https://github.com/alexben300502/starrr/blob/main/userapi/docker-compose.yml), to configure our application services, networks and volumes. It will launch the container and application. <br><br>

Our docker-compose.yml defines two services: <br>
- web application service: it is setting up the correct envrionement for the web server (our userapi app) to run. <br>
- redis service : it pulls the Redis image. <br>

To start the docker-compose file we have just created, we managed to do it with the following command :
```
docker-compose up
```
<br>
Also, as we can see on the image, the terminal indicates the successful creation of various components that represents basic elements in a containerized application; such as network, volume, and containers.


![Image5](images/Image5.png)


Here we can notice from the terminal that we have a container creation, redis that is starting, also server inizalization with redis server that is listening on port 6379. Finally we can notice that the server finished its initialisation and will be from now ready to accept connections over TCP protocols.

Here we see that our application is starting and we notice that the server is listening to port 3000, on the localhost. <br> 

![Image7](images/Image7.png)
<br>

After that we check the application on localhost:3000 and we can see that the print of "Hello World!", so the application is launched successfully. 

![Image8](images/Image8.png)

Also, when we check ou docker hub after launching docker-compose, we notice that the container userapi, with the two images redis and userapi inside it : 

![Image48](images/Image48.png)
<br>

# 6. Docker container orchestration with Kubernetes 

Here, the goal is to Install Kubernetes cluster using Minikube. After that, we will create kubernetes files such as deployments, persistent volumes, persistent volume claim and services. <br>

1. We are going to start a Minikube cluster. Minikube represents a tool allowing to run Kubernetes locally. To launch minikube, after installing it, we launch the following command : 
```
minikube start
```

We can here notice the output where Minikube has been successfully started with the Docker Driver. 
<br>

![Image16](images/Image16.png)

<br>
Many steps are here considered as Docker being restarted, image being extracted.. <br>
At the end, we can see that kubectl is now configured to use Minikube as the default cluster.<br>

**Note:** To be able to launch minikube on Windows, we had to disable the VM driver because the BIOS were not working in Windows. 
```
kubectl config unset vm-driver
```
<br>

2. We are here going to apply our files to the cluster.
We execute the command :

```
kubectl apply -f service.yaml
```

To apply a configuration file named [service.yaml](https://github.com/alexben300502/starrr/blob/main/k8s/service.yaml) to the Kubernetes cluster to enable network access to a set of Pods. As a result we can notice the creation in the cluster of a service named [project-devops-service]. <br>

![Image17](images/Image17.png)

In the same way, we are here executing the command :
```
kubetcl apply -f persistentvolume.yaml
```
As a result we notice the creation of a persistent volume named "task-pv-volume" in the cluster to manage storage in the cluster preserving data even when pods are deleted.<br>

![Image18](images/Image18.png)
<br>

In the same logic, we apply commands 
```
kubectl apply -f deployment.yaml
``` 

To create deployment. <br>
Then :

```
kubectl apply -f persistentvolumeclaim.yaml
```

To create persistentvolumeclaim to request storage resources from the cluster.

**Note:** We could create a storage class ressource in the Kubernetes cluster. We use Storage class to define diferent classes storage that can be dynamically provisionned to pods as persistent volumes. <br>


3. We are checking here that everything is working correctly. <br>

By applying the command kubectl get persistentvolume we can see a list of two persistent volumes.<br>
First one with a capacity of 10Gi and the second one name 'task-pv-volume' with a capacity of 1GI and has been up for 61 minutes.

![Image21](images/Image21.png)

<br>
Then, by applying the command 
```
kubectl get pods
```
We can notice that we have here three replicas with three diferent suffix names. We can see that each pod is ready with the 2/2 in the READY column that meaning that each container of the pod is running. <br>

![Image22](images/Image22.png)
<br>

After that, by applying the command :

```
kubectl get services
```
We have a list of the various services in the cluster, because of the previous labs and tests for them and we did not at this moment destroyed and recreate a cluster. But in this list, the one we are interested in for our project is project-devops-service.

![Image24](images/Image24.png)


Finnaly, we apply : 

```
kubectl get deployment
```

To be able to list deployments in the Kubernetes cluster. The output shows us that the name of the deployment is "project-devops, as defined in the deployment file. 

![Image25](images/Image25.png)
<br>
Then we use minikube for the deployment :  <br>

![Image47](images/Image47.png)
![Image46](images/Image46.png)

We see that we can access our application, so the deployment worked. We have been able to access through the tunnel created by minikube.

The first section lists a service in Kubernetes:<br>
The second section indicates that a tunnel has been started for the project-devops-service, which is a way to expose the service on a local machine for testing or development. 


# 7. Service Mesh with Istio 

To make service mesh, we have to use the cluster we used for the last part k8s. <br> 
To be able to launch minikube, we had to disable the VM driver because the BIOS were not working in Windows. 
```
kubectl config unset vm-driver
```

After that, we allocated 7000 instead of 16384 in the minikube cluster. Thanks to the following command : 
```
minikube start --memory=7000 --cpus=4 --kubernetes-version=v1.27.0
```

Then, once the cluster is launched, we can start to configure ISTIO. <br> 
Once it’s done by running minikube, we configure istio with the commands :  <br> 
```
istioctl install --set profile=default -y
```

Then we enable injections in the namespace, which will enable proxy injection in the default namespace. It will avoid errors later wile deplloying with istio : <br> 
```
kubectl label namespace default istio-injection=enabled
```
Then we apply manifest generate : <br> 
```
istioctl manifest generate | kubectl apply -f -
```
<br> 

And finally, we check if it worked :  <br> 
```
kubectl get pods -n istio-system
```
<br> 

![Image27](images/Image27.png)

And if we check, we see that now there are 3 pods including istio running for project devops : <br>

![Image28](images/Image28.png)

Here, we can see that we have 3/3 so istio is well injected. <br>

![Image29](images/Image29.png)

## Deploy the application with Istio

Here we firstly have the [gateway.yml](https://github.com/alexben300502/starrr/blob/main/istio/gateway.yml), that permits to expose the service. 
In fact, if we configure the virtual service in this file (commented), we can deploy our application using istio thanks to this file. 
It will deploy the app thanks to the ingress gateway furnished by Istio, and thanks to the deloyment file configured before in the k8s section.
<br>

Once the file in configured and applied in the cluster, we check if everything is working thanks to the following command : 
```
istioctl analyze
```
And we wee that there are no issues : 

![Image49](images/Image49.png)

Then we create a minikube tunnel and we run all the installations to access the url address where the application is deployed : 

![Image50](images/Image50.png)
![Image51](images/Image51.png)

*Note:* We had to switch from powershell to gitbash to be able to apply the export commands. <br>

We can access it online and see that the applications is well deployed. 

![Image52](images/Image52.png)

To see how it works, we use KIALI. After applying all the commands to configure and access kali dashboard (thanks to the addons folder provided by Istio), we see that we can see the traffic graph after enabling nodes : 

![Image53](images/Image53.png)


## Request routing and Traffic shiftting between two versions of userapi

1. To permits that, we firstly created a v2 of our app and pushing a new tag of our app to the docker hub? In our case, it's v3, while the first one was latest. <br>

![Image54](images/Image54.png)

2. Once this image is pushed, we create deloymentv2.yaml file, which is a duplicate of deployment.yaml, but corresponds to v2 of our app with pulling the v3 tag of our image.

Once it's done, we apply this new deployment to our cluster as following : 

![Image55](images/Image55.png)

That means that both of our versions are well deployed in our cluster. <br>

3. Then we create a [destinationrule.yml](https://github.com/alexben300502/starrr/blob/main/istio/destinationrule.yml) that will define subsets for v1 and v2 and help istio understand aboutb the two different versions of the app. 
<br>

4. Finally, we Create a [VirtualService.yml](https://github.com/alexben300502/starrr/blob/main/istio/virtualservice.yml)  file to route and shift traffic between the two versions defined in v1 and v2 subsets. Here in our case, 70% of the traffic goes to v1, and 30% goes to v2. <br>
After applying them in the cluster, We test it by deploying it with istio as we did in the first part : 

![Image56](images/Image56.png)
![Image57](images/Image57.png)
 

We can see that routing is working because when we refresh frequently the page, sometimes it’s Hello World (v1) or “Welcome …” (v2). 
Furthermore, the traffic shifting is working because approximatively 70% of the time, it’s "hello world" that is displayed (v1), and 30% is Welcome … (v2). We will use Kiali dashboard graph to verify that :

We use Kiali to see the traffic : 

![Image59](images/Image59.png)

Then, we send 500 curl requests to see more precise traffic in kiali dashboard : <br>

![Image61](images/Image61.png)

We see that we have in fact routing between the versions of our app. We can see when we display traffic in Kiali like in the following picture : 

![Image60](images/Image60.png)

There is in fact 70 % that goes to v1 "Hello World" and 30% that goes to the v2.

# 8 Implementing Monitoring to your containerized application 

1. Using services and deployments from our Istio installation folder. <br>
We apply the addons, as we did for using kali dashboard with following command : 

```
kubectl apply -f istio/addons
```

![Image31](images/Image31.png)

2. Verification that deployments, services and pods are running. <br>
We first verifiy that deployments are running correctly by executing the following command : 
```
kubectl get deployments -n istio-system
```

The output after the execution of this command is showing us 4 deployments: <br>
- Graphana <br>
- Jaeger<br>
- Kiali <br>
- Promotheus <br>

![Image32](images/Image32.png)

We can see that for each deployment the pods are available and ready.
<br>
Then we execute the command 
```
kubectl get services -n istio-system
```

The output shows us the various services within the Istio system namespace. <br>
All of those services are part of stack for Kubernetes Cluster and enables monitoring, and then :

```
kubectl get pods -n istio-system
```
We check that everything is working : <br>

![Image33](images/Image33.png)


![Image34](images/Image34.png)

3. To be able to forward a local port to a port on a Grafana pod within the Istio-system we are going to use the command :

```
kubectl -n istio-system port-forward grafana-b8bbdc84d-4s715
```

That includes the pod we have seen in past images. <br>
The output of the command shows us the following message "Handling connection for 3000"  suggest that <br> there have been several connections made to the local port, which are being forwarded to the Grafana <br> service.

![Image35](images/Image35.png)

<br>

4. We are finnaly able to access Graphana UI.

![Image36](images/Image36.png)

5. Here we are going to deploy prometheus pod to localhost. <br>
To be able to do this we are going to use the following command 

```
kubectl -n istio-system port-forward prometheus-db8b4588f-f972p 9090:9090
``` 
The output indicates that the local machine has handled connections on port 9090 at least twice.

![Image37](images/Image37.png)

6. Accessing prometheus UI with localhost:9090 <br>

![Image40](images/Image40.png)

7. Checking prometheus status

![Image41](images/Image41.png)

8. Link in Graphana to Prometheus server

To be able to do the link between them we go on Graphana in settings and data Source and we put into the HTTP part the url of prometheus [localhost](http://localhost:9090) <br>

![Image42](images/Image42.png)

9. Creating Alerts 

We started by choosing a dashboard and importing it on graphana by its ID. <br>
Our dashboard represents average rate of received bytes over time <br>

![Image43](images/Image43.png)
 <br>
The alert type will notify if the average received bytes over a 5-minute period exceeds a certain threshold, which might indicate unusual network activity.<br>
Then we managed to define all the parameters for the alert.<br>

The specific query is 
```
 avg(rate(container_network_receive_bytes_total[5m]))
```
Which calculates the <br> average rate of received network bytes for containers over the last 5 minutes. <br>
To the right, there's an alert configuration section where a threshold is set. The condition is configured to trigger an alert if the value is above 800 bytes.
<br>

![Image44](images/Image44.png)

Finnaly we set the notifications parameters by putting graphana default email.  <br> 

# BONUS

### We choose to do a bonus : integrating Swagger UI to the source code, a documenting package to your source code. 

For doing that, we follow the next steps. We followed this [guide](https://www.npmjs.com/package/express-swagger-generator) to implement it : 

1. We install the package inside userapi by running this command : 

```
npm i express-swagger-generator --save-dev
```

2. Then we have to implement swagger UI inside application. To do that, we integrate the snippet of code for the installation inside our [index.js](https://github.com/alexben300502/starrr/blob/main/userapi/src/index.js) file.<br>

We can see here that it has worked, when we access the page /api-docs in our browser after the localhost : 

![Image62](images/Image62.png)

3. After that, we have to implement to documentation of the different routes. In our case, since we only have the route [user.js](https://github.com/alexben300502/starrr/blob/main/userapi/src/routes/user.js), we will implement it in this file. 
We firstly set the model definitions as we define the structure of response. Then we set the structure for a user, and then we document the methods of the REST API, such as GET or POST in our case.<br>

After configuring all of that, we can see that all is well configured in the following pictures : 


![Image63](images/Image63.png)
![Image64](images/Image64.png)


Here we can see that when we access the page /api-docs in our browser after the localhost, we see that the routes are well documentated. 
We can test some of them by entering a username for example :

![Image65](images/Image65.png)


