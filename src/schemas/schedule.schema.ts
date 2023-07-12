import { z } from "zod"
import { userReturnSchema, userSchema } from "./user.schema"
import { realEstateReturnSchema } from "./realEstate.schema"

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  userId: z.number().int(),
  realEstateId: z.number().int()
})

const scheduleRequestSchema = scheduleSchema.omit({ id: true, userId: true })
const scheduleReturnSchema = scheduleSchema
  .omit({
    userId: true,
    id: true
  })
  .extend({
    user: userReturnSchema
  })

export { scheduleSchema, scheduleRequestSchema, scheduleReturnSchema }
