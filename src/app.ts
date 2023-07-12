import "reflect-metadata"
import "express-async-errors"
import express, { Application, json } from "express"
import middlewares from "./middlewares"
import { categoryRouter, realEstateRouter, userRouter } from "./routers"
import { sessionRouter } from "./routers/session.router"

const app: Application = express()
app.use(json())

app.use("/users", userRouter)
app.use("/login", sessionRouter)
app.use("/categories", categoryRouter)
app.use("/realEstate", realEstateRouter)

app.use(middlewares.handleError)
export default app
