FROM node:22.4.1-alpine
LABEL Developers="Aditya Guru"
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
RUN rm -rf src/ node_modules/ && npm ci --production
USER node:node
ENV PORT 2425
EXPOSE 2425
CMD ["node","build/index.js"]
