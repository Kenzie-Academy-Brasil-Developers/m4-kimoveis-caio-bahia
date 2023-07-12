import { Request, Response } from "express"
import { Category } from "../entities"
import { categoryServices } from "../services"
import { CategoryResponse, CategoryReturn } from "../interfaces"

const create = async (req: Request, res: Response): Promise<Response> => {
  const category: Category = await categoryServices.create(req.body)
  return res.status(201).json(category)
}

const read = async (req: Request, res: Response): Promise<Response> => {
  const readCategories: Array<CategoryResponse> = await categoryServices.read()
  return res.status(200).json(readCategories)
}
const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const CategoryReturn: CategoryReturn = await categoryServices.Retrieve(req.params.id)
  return res.status(200).json(CategoryReturn)
}
export default { create, read, retrieve }
