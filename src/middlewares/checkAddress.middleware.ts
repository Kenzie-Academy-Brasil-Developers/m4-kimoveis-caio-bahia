import { NextFunction, Request, Response } from "express"
import { Address } from "../entities"
import { addressRepository } from "../repositories"
import { AppError } from "../errors"

export const CheckAdress = async (req: Request, res: Response, next: NextFunction) => {
  const RequestAdress: Address = req.body.address

  let finder = null

  if (RequestAdress.number) {
    finder = await addressRepository.findOne({
      where: {
        street: RequestAdress.street,
        state: RequestAdress.state,
        city: RequestAdress.city,
        number: RequestAdress.number
      }
    })
  } else {
    finder = await addressRepository.findOne({
      where: {
        street: RequestAdress.street,
        state: RequestAdress.state,
        city: RequestAdress.city
      }
    })
  }
  if (finder !== null) throw new AppError("Address already exists", 409)
  next()
}
