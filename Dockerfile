FROM node:16-alpine

WORKDIR .

COPY package.json .
#COPY next.config.js ./next.config.js




COPY . .
#RUN npm install webpack@4.44.0
RUN npm install
#RUN npm uninstall webpack
RUN npm run build

EXPOSE 3000
# required for docker desktop port mapping

CMD ["npm", "start"]