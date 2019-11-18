FROM node:8-alpine

COPY . /opt
WORKDIR /opt
RUN yarn config set registry https://nexus.ooflex.net/repository/npm && yarn add package.json
