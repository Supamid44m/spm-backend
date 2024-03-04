FROM node:20.9.0

WORKDIR /spm/backend
COPY . .


RUN npm install

CMD [ "npm","run","dev" ]

