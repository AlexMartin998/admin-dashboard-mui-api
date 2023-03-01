<p align="center" >
 <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/MERN-logo.png" width="200" alt="Nest Logo" />
</p>

# BUSINESS ANALYTICS DASHBOARD APP - API

## Features

⚡️ Node.js\
⚡️ MongoDB\
⚡️ Mongoose\
⚡️ JWT\
⚡️ Docker

## Description

This dashboard app is built with React, Express, MongoDB, and Node is a web-based application that allows users to monitor and manage various aspects of their business or organization. It provides a user-friendly interface that enables users to view and analyze real-time data, create and track tasks and projects, and access key information and resources from a single, central location. The app is built using a modern stack of technologies that ensures fast and a really efficient performance.

## Running the app

### Dev Env

#### .env

Create `.env` file based on `.env.template`

#### Deps and run

```bash
# install pnpm
npm i -g pnpm

# add your host user
export DOCKER_USER="$(id -u):$(id -g)"

# run docker contaniers
docker compose -f docker-compose.dev.yml up --build

# stop and remove containers & networks
docker compose -f docker-compose.dev.yml down

```

##### Pull image

You can also download the image already created from the Docker Hub

```bash
docker pull adralx/ecomvision-mern
```

### Prod Env

- Configure the app to run in prod

- Running the app

```
docker compose up --build
```

## Testing

### Jest with supertest

```
npm run test
```

#### Use watch

```
npm run test-watch
```

### Mocha with chai and chai-http

```
npm run test-mocha
```

## View demo

To see the real-time behavior you can log in with:

- User: `swelbeck12@ycombinator.com` and password `RSjzmAjnq`

<br/>
<a href="https://ecomvision-reacmuijs-alx.netlify.app/auth/login" target="blank">Demo</a>

<br/>
<br/>

<img width="1604" src="https://raw.githubusercontent.com/AlexMartin998/admin-dashboard-mui/main/.screenshots/dashboard.png">



| | | 
|:-------------------------:|:-------------------------:|
| <img width="1604" src="https://raw.githubusercontent.com/AlexMartin998/admin-dashboard-mui/main/.screenshots/products.png">    |  <img width="1604" src="https://raw.githubusercontent.com/AlexMartin998/admin-dashboard-mui/main/.screenshots/daily-picker.png"> 
| <img width="1604" src="https://raw.githubusercontent.com/AlexMartin998/admin-dashboard-mui/main/.screenshots/geography.png">    |  <img width="1604" src="https://raw.githubusercontent.com/AlexMartin998/admin-dashboard-mui/main/.screenshots/transactions.png"> 

