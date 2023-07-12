import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"

export const isOwner = (req: Request, res: Response, next: NextFunction): void => {
  const { id } = req.params
  const { admin, sub } = res.locals.decoded

  if (sub === id || admin) return next()

  throw new AppError("Insufficient permission", 403)
}
