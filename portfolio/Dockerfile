FROM node:11.5.0-alpine

RUN mkdir -p /app
WORKDIR /app

COPY package.json /app
COPY package-lock.json /app

RUN npm install

COPY . /app

CMD [ "npm", "start" ]