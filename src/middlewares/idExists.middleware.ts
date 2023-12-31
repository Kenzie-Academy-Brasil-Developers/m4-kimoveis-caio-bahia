import { Request, Response, NextFunction } from "express"
import { userRepository } from "../repositories"
import { User } from "../entities"
import { AppError } from "../errors"

export const idExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const id: number = Number(req.params.id)

  const foundEntity: User | null = await userRepository.findOneBy({ id })

  console.log("bateu")
  if (!foundEntity) throw new AppError("User not found", 404)
  console.log("bateu")

  res.locals = { ...res.locals, foundEntity }

  return next()
}

//
