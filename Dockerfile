FROM node:alpine
WORKDIR /web
COPY . .
RUN npm i
VOLUME "/web/dist"
CMD npm run build
