
FROM node:18-alpine3.17 as prod-deps
WORKDIR /app
COPY package.json package.json
RUN yarn install --prod --frozen-lockfile



FROM node:18-alpine3.17 as prod
EXPOSE 3300
WORKDIR /app
ENV APP_VERSION=${APP_VERSION}
COPY package.json package.json
COPY --from=prod-deps /app/node_modules ./node_modules
COPY . .

CMD [ "node", "src/server.js"]

