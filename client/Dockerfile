# syntax=docker/dockerfile:1

FROM node:12.16.1
ENV NODE_ENV=development

WORKDIR /client

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]