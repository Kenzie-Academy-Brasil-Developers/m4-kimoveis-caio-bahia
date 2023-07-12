import { Router } from "express"
import middlewares from "../middlewares"
import { userCreateSchema } from "../schemas"
import { userControllers } from "../controllers"

export const userRouter: Router = Router()

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
)
userRouter.get("", middlewares.verifyToken, middlewares.isAdmin, userControllers.read)

userRouter.use("/:id", middlewares.verifyToken, middlewares.isAdminOrOwner, middlewares.idExists)

userRouter.patch("/:id", userControllers.update)
userRouter.delete(
  "/:id",
  middlewares.isAdmin,
  middlewares.idExists,
  middlewares.verifyToken,
  userControllers.destroy
)
