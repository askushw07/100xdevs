FROM node:current-alpine3.19
WORKDIR /app
# COPY . .
RUN npm i vite@latest
RUN npm install
RUN npm run build
RUN npx prisma generate

EXPOSE 3000

CMD [ "node","dist/index.js" ]
