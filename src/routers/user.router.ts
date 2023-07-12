import { Router } from "express"
import middlewares from "../middlewares"
import { UserUpdateSchema, userCreateSchema } from "../schemas"
import { userControllers } from "../controllers"

export const userRouter: Router = Router()

userRouter.post(
  "",
  middlewares.validateBody(userCreateSchema),
  middlewares.uniqueEmail,
  userControllers.create
)
userRouter.get("", middlewares.verifyToken, middlewares.isAdmin, userControllers.read)

userRouter.use("/:id", middlewares.verifyToken, middlewares.isOwner, middlewares.idExists)

userRouter.patch(
  "/:id",
  middlewares.validateBody(UserUpdateSchema),
  middlewares.verifyToken,
  middlewares.isOwner,
  userControllers.update
)
userRouter.delete(
  "/:id",
  middlewares.verifyToken,
  middlewares.isAdmin,
  middlewares.idExists,
  middlewares.isDeleted,
  userControllers.destroy
)
