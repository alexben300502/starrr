# Version de Node utilisée
FROM node:16

WORKDIR /usr/src/app

# We use all the json files
COPY package*.json ./

RUN npm install

COPY . .

# We use port 3000 in the index file
EXPOSE 3000

# efine how to launch the app 
CMD ["npm", "start"]
