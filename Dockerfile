FROM node:22.4.1-alpine
LABEL Developers="Aditya Guru"
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
RUN rm -rf src/ static/ emailTemplates/ docker-compose.yml
USER node:node
ENV PORT 2424
EXPOSE 2424
CMD ["node","build/index.js"]
