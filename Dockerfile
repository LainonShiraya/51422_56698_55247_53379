# pull official base image
FROM node:18.16.0

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
#RUN npx convex dev
#RUN npm install react-scripts@3.4.1 -g 

# add app
COPY . ./

# Expose the port
EXPOSE 5173

# start app

CMD ["npm", "start"]