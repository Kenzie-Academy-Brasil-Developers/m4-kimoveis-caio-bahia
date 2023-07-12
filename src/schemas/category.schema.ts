import { z } from "zod"

const categorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45)
})

const categoryCreateSchema = categorySchema.omit({ id: true })
const categoryRealState = categorySchema.omit({ name: true })

export { categorySchema, categoryCreateSchema, categoryRealState }
