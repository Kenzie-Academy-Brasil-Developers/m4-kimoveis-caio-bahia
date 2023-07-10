import { Router } from "express"
import middlewares from "../middlewares"
import { userCreateSchema } from "../schemas"
import { userControllers } from "../controllers"

export const userRouter: Router = Router()

userRouter.post("", middlewares.validateBody(userCreateSchema), userControllers.create)
userRouter.get("", middlewares.verifyToken, middlewares.isAdmin, userControllers.read)

userRouter.use("/:id", middlewares.verifyToken, middlewares.idExists, middlewares.isAdmin)

userRouter.patch("/:id")
userRouter.delete("/:id", middlewares.isAdminOrOwner, userControllers.destroy)
