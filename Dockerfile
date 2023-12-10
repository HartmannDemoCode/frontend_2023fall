# First stage: build the react app
# FROM tiangolo/node-frontend:10 as build-stage
FROM node:18 as build-stage
WORKDIR /app
COPY package*.json /app/
RUN npm install
COPY . .
RUN npm run build

# Second stage: use the build output from the first stage with nginx
FROM nginx:1.25
# COPY --from=build-stage /app/dist/ /usr/share/nginx/html
# COPY --from=build-stage /app/dist/ /var/www
COPY --from=build-stage /app/dist/ /usr/share/nginx/html
# COPY index.html /usr/share/nginx/html/index.html

# Copy the default nginx.conf provided by tiangolo/node-frontend
COPY ./nginx.conf /etc/nginx/conf.d/default.conf