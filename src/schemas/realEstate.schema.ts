import { z } from "zod"
import { addressSchema } from "./address.schema"
import { categoryRealState } from "./category.schema"

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.number().int().or(z.string()).default(0),
  size: z.number().positive().int(),
  address: addressSchema,
  categoryId: categoryRealState,
  sold: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date())
})

const realEstateCreateSchema = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true
})
