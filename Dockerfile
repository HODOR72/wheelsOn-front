ARG FROM_IMAGE
FROM ${FROM_IMAGE:-node:12.21.0-alpine}

ENV APP_USER=osago

RUN adduser -D  $APP_USER

WORKDIR /alpha-insurance-bot/front
RUN chown -R $APP_USER: /alpha-insurance-bot


COPY ./package.json .
RUN npm install

COPY . .
RUN npm run build

RUN chown -R $APP_USER: /alpha-insurance-bot/front/.next/cache

USER $APP_USER

# TODO: для дев-опса :) В параметр запуска docker-compose (!) npm run start
