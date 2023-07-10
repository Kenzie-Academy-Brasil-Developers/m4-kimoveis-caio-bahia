import { Request, Response } from "express"
import { Category } from "../entities"
import { categoryServices } from "../services"
import { CategoryResponse } from "../interfaces"

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.create(req.body)
  return res.status(201).json(category)
}

const read = async (req: Request, res: Response): Promise<Response> => {
  const readCategories: Array<CategoryResponse> = await categoryServices.read()
  return res.status(200).json(readCategories)
}
export default { create, read }
