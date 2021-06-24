FROM node:14-alpine
ARG FRONT_END_APP
ARG BUILD_ID
ARG VERSION
WORKDIR /opt/app
ENV APP_NAME="${APP_NAME}"
ENV BUILD_ID="${BUILD_ID}"
ENV VERSION="${VERSION}"
# Do not rely on NODE_ENV - exists for performance reasons only
ENV NODE_ENV=production
ENV PORT=3000
COPY ./package*.json .
RUN npm install
COPY ./src .
EXPOSE 3000
USER node
CMD [ "npm", "start" ]
