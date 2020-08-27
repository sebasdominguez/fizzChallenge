FROM node:alpine
WORKDIR /app

COPY ./package.json package.json
COPY ./index.js index.js
COPY ./server.js server.js
COPY ./index.html index.html
COPY ./webpack.config.js webpack.config.js
COPY ./react react
COPY ./store store
COPY ./utils utils

EXPOSE 1337

RUN ["npm", "install"]
CMD ["npm", "start"]