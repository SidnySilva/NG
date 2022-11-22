FROM node:17.9.0

WORKDIR /app

COPY package*.json ./

RUN yarn

COPY . .

ENV NODE_PATH=./src