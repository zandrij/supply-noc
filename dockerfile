
FROM node:22.21.1

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3334

RUN npm run build

CMD [ "npm", "start -- --port 3334" ]