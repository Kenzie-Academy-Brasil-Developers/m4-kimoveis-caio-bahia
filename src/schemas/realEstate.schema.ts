import { z } from "zod"
import { addressSchema, addressSchemaCreate } from "./address.schema"
import { categoryRealState } from "./category.schema"

const realEstateSchema = z.object({
  id: z.number().positive(),
  value: z.number().positive().or(z.string()).default(0),
  size: z.number().positive(),
  address: addressSchemaCreate,
  categoryId: z.number().positive(),
  sold: z.boolean().default(false),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date())
})

const realEstateCreateSchema = realEstateSchema
  .omit({
    id: true,
    sold: true,
    createdAt: true,
    updatedAt: true
  })
  .extend({
    address: addressSchemaCreate
  })

const realEstateReturnSchema = realEstateSchema.omit({
  size: true,
  sold: true,
  value: true,
  updatedAt: true,
  addressId: true,
  categoryId: true
})
const realEstateReadSchema = realEstateSchema.extend({ realEstateReturnSchema }).array()
export { realEstateCreateSchema, realEstateSchema, realEstateReturnSchema, realEstateReadSchema }
