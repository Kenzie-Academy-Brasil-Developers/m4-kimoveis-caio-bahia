import { Request, Response } from "express"
import { userServices } from "../services"
import { User } from "../entities"

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await userServices.create(req.body)
  return res.status(201).json(user)
}
const read = async (req: Request, res: Response): Promise<Response> => {
  const users: Array<User> = await userServices.read()
  return res.status(200).json(users)
}

// const update = async (): Promise => {
//   return
// }

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity)
  return res.status(204).json()
}

export default { create, read, destroy }
