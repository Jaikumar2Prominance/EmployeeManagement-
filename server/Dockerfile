# syntax=docker/dockerfile:1

FROM node:12.16.1
ENV NODE_ENV=development

WORKDIR /server

COPY package*.json ./

RUN npm install 

COPY . .

CMD [ "npm", "server" ]