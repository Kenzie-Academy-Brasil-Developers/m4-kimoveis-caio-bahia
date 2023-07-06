import { z } from "zod"
import { userSchema } from "./user.schema"

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  //   realEstateId:
  userId: userSchema
})

const scheduleRequestSchema = scheduleSchema.omit({ id: true, userId: true })

export { scheduleSchema, scheduleRequestSchema }
