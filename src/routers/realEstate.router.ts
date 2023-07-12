import { Router } from "express"
import middlewares from "../middlewares"
import { realEstateCreateSchema, realEstateSchema } from "../schemas"
import { realEstateControllers } from "../controllers"

export const realEstateRouter: Router = Router()

realEstateRouter.post(
  "",
  middlewares.validateBody(realEstateCreateSchema),
  middlewares.verifyToken,
  middlewares.isAdmin,
  realEstateControllers.create
)

realEstateRouter.get("", realEstateControllers.read)
