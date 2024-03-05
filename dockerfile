FROM node:20.9.0

WORKDIR /spm/backend
COPY . .


RUN npm install

EXPOSE 8000

CMD [ "npm","run","dev" ]



# map port
# docker ps
# docker rm -f $(docker ps -a -q)
# docker rm -f ...name...

# docker run -d -p 8000:8000 --name spm-backend spm-backend