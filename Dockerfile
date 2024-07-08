FROM node:20-alpine as builder

WORKDIR /app

COPY . . 

RUN ["npm", "ci"]
RUN ["npm", "run", "build"]

FROM nginx:stable as nginx
WORKDIR /app
COPY --from=builder /app/dist ./static/
COPY ./nginx.conf /etc/nginx/nginx.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
