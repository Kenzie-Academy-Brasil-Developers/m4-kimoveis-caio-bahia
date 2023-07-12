import { z } from "zod"
import { Repository } from "typeorm"
import { Schedule } from "../entities"
import { scheduleRequestSchema, scheduleReturnSchema } from "../schemas"

type scheduleCreate = z.infer<typeof scheduleRequestSchema>
type scheduleReturn = z.infer<typeof scheduleReturnSchema>

type scheduleRepo = Repository<Schedule>

export { scheduleCreate, scheduleRepo, scheduleReturn }
