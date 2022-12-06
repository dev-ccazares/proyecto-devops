### STAGE 1: Build ###
FROM node:16.13.0-alpine AS build
WORKDIR /usr/src/app
COPY front/package.json front/package-lock.json ./
RUN npm install
COPY /front .
RUN npm run build
### STAGE 2: Run ###
FROM nginx:alpine
COPY front/nginx.conf /etc/nginx/nginx.conf
COPY --from=build /usr/src/app/dist/front /usr/share/nginx/html
