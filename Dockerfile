# base image
FROM node:14-alpine AS build

# set working directory
WORKDIR /app

# copy project file
COPY package*.json ./

# install dependencies
RUN npm install

# copy project files
COPY . .

# build app
RUN npm run build --prod

# use a lighter image for deployment
FROM nginx:1.19.0-alpine

# copy build artifacts to the nginx public folder
COPY --from=build /app/dist/angular-bootstrap /usr/share/nginx/html

# copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose port
EXPOSE 80

# start nginx
CMD ["nginx", "-g", "daemon off;"]
