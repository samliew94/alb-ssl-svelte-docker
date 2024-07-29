FROM node:20-alpine AS base
RUN npm i -g pnpm

FROM base AS builder
WORKDIR /app
COPY . .
RUN pnpm i
RUN pnpm build
RUN pnpm prune --prod

FROM base AS runner
WORKDIR /app
COPY --from=builder /app/package.json .
COPY --from=builder /app/pnpm-lock.yaml .
COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/

EXPOSE 8080
cmd node build