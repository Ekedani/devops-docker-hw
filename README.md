# DevOps course docker homework

This is a simple application created to show an example of containerization node.js app using Docker. [Docker Hub repository](https://hub.docker.com/repository/docker/ekedani/devops-nodejs-app)

## Install
    docker build -t ekedani/devops-nodejs-app:1.1 .

or if you want to pull from Docker hub:

    docker pull ekedani/devops-nodejs-app:1.1
    
## Run the app
    docker run --rm --name devops-nodejs --cpus="1" --memory="64M" -p 80:80 ekedani/devops-nodejs-app:1.1
Memory & CPUs parameters may be changed if needed. After that app will be running on localhost:80

If you want to run it in Kubernetes:

    kubectl create namespace devops
    kubectl apply -f .\k8s\
    
## Available endpoints
| Method | Resource     | Description                   | 
|--------|--------------|-------------------------------|
| GET    | /home        | Get the application home page |
| GET    | /favicon.ico | Get the application favicon   |

