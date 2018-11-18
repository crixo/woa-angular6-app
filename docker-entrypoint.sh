#!/bin/sh
#PORT=${VARIABLE:=80}
echo $PORT
echo $MY_ENV
sed -i -e 's/$PORT/'"$PORT"'/g' /etc/nginx/conf.d/default.conf
mv /usr/share/nginx/html/environments/$MY_ENV-env.js /usr/share/nginx/html/env.js
#nginx -g 'daemon off;'
exec nginx -g "daemon off;"