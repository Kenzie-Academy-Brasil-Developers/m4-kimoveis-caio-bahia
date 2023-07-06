import { Request, Response, NextFunction, json } from "express"

import { AppError } from "../errors"

export const handleError = (
  error: unknown,
  req: Request,
  res: Response,
  next: NextFunction
): Response => {
  if (error instanceof AppError) {
    return res.status(error.status).json({ message: error.message })
  }

  console.log(error)
  return res.status(500).json({ message: "Internal server error" })
}
