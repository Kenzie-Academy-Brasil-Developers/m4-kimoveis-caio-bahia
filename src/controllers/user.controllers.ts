import { Request, Response } from "express"
import { userServices } from "../services"
import { User } from "../entities"
import { UserRead, UserReturn } from "../interfaces"

const create = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.create(req.body)
  return res.status(201).json(user)
}
const read = async (req: Request, res: Response): Promise<Response> => {
  const admin: boolean = res.locals.decoded.admin
  const users: UserRead | undefined = await userServices.read(admin)
  return res.status(200).json(users)
}

const update = async (req: Request, res: Response): Promise<Response> => {
  const userData = req.body
  const userId: number = Number(req.params.id)

  const UpdatedUser = await userServices.update(userData, userId)
  return res.status(200).json(UpdatedUser)
}

const destroy = async (req: Request, res: Response): Promise<Response> => {
  await userServices.destroy(res.locals.foundEntity)
  return res.status(204).json()
}

export default { create, read, destroy, update }
