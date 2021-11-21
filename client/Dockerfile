FROM node

# make the 'client' folder the current working directory
WORKDIR /client

# copy both 'package.json' and 'package-lock.json' (if available)
COPY package*.json /client/

# install project dependencies
RUN npm install

# copy project files and folders to the current working directory (i.e. 'client' folder)
COPY . /client/

EXPOSE 3000

CMD [ "npm", "start"]
