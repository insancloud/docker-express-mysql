FROM node:14

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3500 1122

CMD [ "node", "index.js" ]