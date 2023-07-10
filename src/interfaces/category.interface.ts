import { z } from "zod"
import { categoryCreateSchema, categorySchema } from "../schemas"
import { Repository } from "typeorm"
import { Category } from "../entities"

type CategoryCreate = z.infer<typeof categoryCreateSchema>
type CategoryResponse = z.infer<typeof categoryCreateSchema>
type CategoryRequest = z.infer<typeof categorySchema>
type CategoryRepo = Repository<Category>

export { CategoryCreate, CategoryRepo, CategoryResponse, CategoryRequest }
