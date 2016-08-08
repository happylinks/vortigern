FROM mhart/alpine-node:latest

MAINTAINER Michiel Westerbeek michiel@birdy-app.com

WORKDIR /app
ADD . .

RUN npm install

EXPOSE 8080

CMD ["npm", "run", "start:prod"]
