FROM node:20 AS frontend
WORKDIR /checkyou/frontend
COPY package.json ./
COPY package-lock.json ./
COPY yarn.lock ./
RUN yarn set version berry 
RUN yarn install
COPY . ./
RUN yarn build
RUN yarn start