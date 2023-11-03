from node:alpine

workdir ../backend/index.ts

copy package*.json ./

run npm install

copy . .

expose 3000

cmd ["npm", "start"]