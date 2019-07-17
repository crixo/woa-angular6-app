# Stage 1
FROM node:8.11.2-alpine as node

WORKDIR /usr/src/app

COPY package*.json ./

# RUN npm install
# https://docs.npmjs.com/cli/ci.html
RUN npm install -g npm@latest && npm ci

COPY . .

RUN npm run build -- --configuration production

# Stage 2
FROM nginx:1.13.12-alpine

RUN mkdir /mydir 

COPY --from=node /usr/src/app/dist/woa-angular6-app /usr/share/nginx/html
# COPY ./dist/woa-angular6-app /usr/share/nginx/html

COPY ./nginx.conf /etc/nginx/conf.d/default.conf

COPY ./docker-entrypoint.sh /mydir

RUN ["chmod", "+x", "/mydir/docker-entrypoint.sh"]

# it will be overwritten by heroku
ENV PORT 80

#CMD ["/mydir/docker-entrypoint.sh", ]
CMD ["sh", "-c", "/mydir/docker-entrypoint.sh $PORT"]
