import { Hono } from "hono"

const app = new Hono()

app.get("/", (c) => c.json("Hello from Hono!"))

Bun.serve({
  fetch: app.fetch,
  port: process.env.PORT || 3000,
})

export default app