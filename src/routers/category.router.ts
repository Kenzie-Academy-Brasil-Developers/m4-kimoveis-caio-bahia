import { Router } from "express"
import middlewares from "../middlewares"
import { CategoryResponse, CategoryRequest } from "../interfaces/index"
import { categoryCreateSchema, categorySchema } from "../schemas"
import { categoryControllers } from "../controllers"

export const categoryRouter: Router = Router()

categoryRouter.post(
  "",
  middlewares.validateBody(categoryCreateSchema),
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.uniqueCategory,
  categoryControllers.create
)
categoryRouter.get("", categoryControllers.read)
