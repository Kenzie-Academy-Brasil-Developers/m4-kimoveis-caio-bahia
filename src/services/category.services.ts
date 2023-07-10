// List All /categories
// GetAll Imoveis Inside Category /categories/:id/realEstate

import { Category } from "../entities"
import { CategoryCreate, CategoryResponse } from "../interfaces"
import { categoryRepository } from "../repositories"

const create = async (payload: CategoryCreate): Promise<Category> => {
  const category: Category = categoryRepository.create(payload)
  await categoryRepository.save(category)

  return category
}

const read = async (): Promise<Array<CategoryResponse>> => {
  const repoResponse: Array<Category> | null = await categoryRepository.find()

  return repoResponse
}
export default { create, read }
