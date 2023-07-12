import { Request, Response } from "express"
import { schedulesServices } from "../services"
import { realEstateReturn } from "../interfaces"

const create = async (req: Request, res: Response): Promise<Response> => {
  const userId: number = Number(res.locals.decoded.sub)
  const schedule = await schedulesServices.create(req.body, userId)

  return res.status(201).json(schedule)
}
const read = async (req: Request, res: Response): Promise<Response> => {
  const SchedulesByEstate: realEstateReturn = await schedulesServices.read(req.params.id)
  return res.status(200).json(SchedulesByEstate)
}
export default { create, read }
