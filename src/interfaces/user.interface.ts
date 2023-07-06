import { DeepPartial, Repository } from "typeorm"
import { userCreateSchema, userReadSchema, userReturnSchema } from "../schemas"
import { User } from "../entities"
import { z } from "zod"

type UserCreate = z.infer<typeof userCreateSchema>
type UserRead = z.infer<typeof userReadSchema>
type UserReturn = z.infer<typeof userReturnSchema>
type UserUpdate = DeepPartial<User>

type UserRepo = Repository<User>

export { UserCreate, UserRead, UserReturn, UserUpdate, UserRepo }
