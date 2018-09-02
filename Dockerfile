FROM node:10.9-alpine
MAINTAINER Djordje Vukovic

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 4000

CMD npm install && npm run dev
