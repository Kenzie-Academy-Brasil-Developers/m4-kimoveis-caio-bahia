import { Request, Response } from "express"
import { schedulesServices } from "../services"

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(res.locals.decoded.sub)
  const schedule = await schedulesServices.create(req.body, userId)

  return res.status(201).json(schedule)
}

export default { create }
