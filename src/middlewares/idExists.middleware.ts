import { Request, Response, NextFunction } from "express"
import { userRepository } from "../repositories"
import { User } from "../entities"
import { AppError } from "../errors"

export const idExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number = Number(req.params.id)
  console.log(id)

  const foundEntity: User | null = await userRepository.findOneBy({ id })

  if (!foundEntity) throw new AppError("User not Found", 404)

  res.locals = { ...res.locals, foundEntity }

  console.log(res.locals)
  return next()
}

//
