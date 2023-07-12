// List All /categories
// GetAll Imoveis Inside Category /categories/:id/realEstate

import { Category } from "../entities"
import { AppError } from "../errors"
import { CategoryCreate, CategoryResponse, CategoryReturn } from "../interfaces"
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

const Retrieve = async (categoryId: string): Promise<CategoryReturn> => {
  const RealEstatesbyCategory: Category | null = await categoryRepository.findOne({
    where: { id: Number(categoryId) },
    relations: { realEstate: true }
  })
  if (!RealEstatesbyCategory) throw new AppError("Category not found", 404)

  return RealEstatesbyCategory
}

export default { create, read, Retrieve }
