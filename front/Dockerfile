FROM --platform=linux/x86-64 node:14 AS build
WORKDIR /usr/src/app

# ARG api_url
# ENV API_HOST=$api_url
# ENV REACT_APP_BASE_URL=$api_url
# ENV REACT_APP_API_URL=$api_url/api

COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build


FROM --platform=linux/x86-64 nginx:stable-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
