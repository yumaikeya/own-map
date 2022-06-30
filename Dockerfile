FROM node:lts-alpine3.16

ENV TZ=Asia/Tokyo

WORKDIR /usr/src/app

# memo
# RUN yarn init -y 
# RUN npx create-react-app --template typescript
# RUN yarn add -D webpack webpack-cli typescript ts-loader ts-node webpack-dev-server @types/react @types/react-dom @types/webpack @types/webpack-dev-server dotenv-webpack html-webpack-plugin
# RUN yarn add react react-dom