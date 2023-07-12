import { Router } from "express"
import middlewares from "../middlewares"
import { Schedule } from "../entities"
import { scheduleRequestSchema } from "../schemas"
import { scheduleControllers } from "../controllers"

export const scheduleRouter: Router = Router()

scheduleRouter.post(
  "",
  middlewares.verifyToken,
  middlewares.validateBody(scheduleRequestSchema),
  scheduleControllers.create
)

scheduleRouter.get(
  "/realEstate/:id",
  middlewares.verifyToken,
  middlewares.isAdmin,
  scheduleControllers.read
)
