FROM node:20 AS frontend
WORKDIR /alpha/frontend
COPY /alpha-front/package.json .
RUN yarn set version berry 
RUN yarn install
COPY /alpha-front .
RUN yarn build