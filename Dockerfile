FROM node:10.12-alpine
MAINTAINER Djordje Vukovic

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .

EXPOSE 443

CMD npm install && npm run dev
