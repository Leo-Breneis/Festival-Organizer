FROM node
#backend
WORKDIR ./app
COPY ./package*.json .
RUN npm install
COPY . .
CMD ["npm", "run", "start"]

EXPOSE 8000


