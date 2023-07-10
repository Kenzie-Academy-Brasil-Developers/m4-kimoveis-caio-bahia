import { Request, Response, NextFunction } from "express"
import { userRepository } from "../repositories"
import { User } from "../entities"
import { AppError } from "../errors"

export const idExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number = Number(req.params.id)

  const foundEntity: User | null = await userRepository.findOneBy({ id })

  if (!foundEntity) throw new AppError("User not found", 403)

  res.locals = { ...res.locals, foundEntity }

  return next()
}

//
