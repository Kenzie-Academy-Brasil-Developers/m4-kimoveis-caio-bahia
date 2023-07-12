import { NextFunction, Request, Response } from "express"
import { AppError } from "../errors"
import { userRepository } from "../repositories"

export const isDeleted = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const user = await userRepository.findOneBy({ id: parseInt(req.params.id) })
  if (user?.deletedAt !== null) {
    throw new AppError("already deleted user", 409)
  }
  return next()
}
