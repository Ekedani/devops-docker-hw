# DevOps course docker homework

This is a simple application created to show an example of containerization node.js app using Docker

## Install
    docker build -t ekedani/devops-nodejs-app:1.0 .

or if you want to pull from dockerhub:

    docker pull ekedani/devops-nodejs-app:1.0
    
## Run the app
    docker run --name devops-nodejs --cpus="1" --memory="64M" -p 80:80 ekedani/devops-nodejs-app:1.0
Memory & CPUs parameters may be changed if needed. After that app will be running on localhost:80
    
## Available endpoints
| Method | Resource     | Description                   | 
|--------|--------------|-------------------------------|
| GET    | /home        | Get the application home page |
| GET    | /favicon.ico | Get the application favicon   |

