# Stage 1
FROM node:8.11.2-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --prod
#RUN ng build --configuration production

# Stage 2
FROM nginx:1.13.12-alpine

COPY --from=node /usr/src/app/dist/woa-angular6-app /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf