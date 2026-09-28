FROM public.ecr.aws/docker/library/node:18.14.2-alpine3.17 AS build

ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=${REACT_APP_MOVIE_API_URL}

WORKDIR /workspace
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM public.ecr.aws/docker/library/node:18.14.2-alpine3.17
WORKDIR /app
RUN npm install --global serve@14.2.0 && addgroup -S web && adduser -S web -G web
COPY --from=build --chown=web:web /workspace/build ./build
USER web
EXPOSE 3000
CMD ["serve", "-s", "build", "-l", "3000"]
