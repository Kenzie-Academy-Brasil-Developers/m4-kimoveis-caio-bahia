import { Router } from "express"
import middlewares from "../middlewares"
import { realEstateSchema } from "../schemas"
import { realEstateControllers } from "../controllers"

export const realEstateRouter: Router = Router()

realEstateRouter.post(
  "",
  middlewares.validateBody(realEstateSchema),
  middlewares.verifyToken,
  middlewares.isAdmin,
  realEstateControllers.create
)
