import { z } from "zod"

const addressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45).min(1),
  zipCode: z.string().max(8).min(1),
  number: z.string().max(7).nullish(),
  city: z.string().max(20),
  state: z.string().max(2)
})

const addressSchemaRequest = addressSchema.omit({ id: true })

export { addressSchema, addressSchemaRequest }
