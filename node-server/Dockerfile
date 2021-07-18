FROM node

WORKDIR /node-server

COPY package*.json .

RUN npm install
RUN npm install dotenv
RUN npm install -g nodemon 

COPY . .
